import { useEffect } from "react";
import { animate, stagger, onScroll, createScope } from "animejs";

// Hormati preferensi pengguna yang memilih gerakan minimal (aksesibilitas)
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Nilai data-parallax: "120" berarti 0 -> 120px, "-30,40" berarti -30px -> 40px
const parseParallaxValue = (raw) => {
  const parts = String(raw)
    .split(",")
    .map((v) => parseFloat(v));
  if (parts.length > 1 && Number.isFinite(parts[1])) {
    return [Number.isFinite(parts[0]) ? parts[0] : 0, parts[1]];
  }
  return [0, Number.isFinite(parts[0]) ? parts[0] : 0];
};

/**
 * Animasi masuk (entrance) yang langsung diputar saat komponen mount.
 * Target: elemen [data-entrance] di dalam ref (atau ref itu sendiri).
 */
export const useEntrance = (ref, options = {}) => {
  const {
    selector = "[data-entrance]",
    distance = 36,
    duration = 900,
    step = 110,
    scale = false,
  } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return undefined;

    const targets = selector ? root.querySelectorAll(selector) : [root];
    if (!targets.length) return undefined;

    const scope = createScope({ root }).add(() => {
      animate(targets, {
        opacity: [0, 1],
        translateY: [distance, 0],
        ...(scale ? { scale: [0.94, 1] } : {}),
        duration,
        ease: "out(3)",
        delay: stagger(step),
      });
    });

    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/**
 * Reveal saat scroll: kartu/bagian muncul lembut saat masuk viewport.
 * Target: elemen [data-reveal] di dalam ref (atau ref itu sendiri).
 * popSelector: elemen (mis. ikon) yang muncul dengan efek pop memantul.
 */
export const useScrollReveal = (ref, options = {}) => {
  const {
    selector = "[data-reveal]",
    distance = 44,
    duration = 900,
    step = 130,
    popSelector,
  } = options;

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return undefined;

    const targets = selector ? root.querySelectorAll(selector) : [root];
    const popTargets = popSelector ? root.querySelectorAll(popSelector) : [];
    if (!targets.length && !popTargets.length) return undefined;

    const scope = createScope({ root }).add(() => {
      if (targets.length) {
        animate(targets, {
          opacity: [0, 1],
          translateY: [distance, 0],
          duration,
          ease: "out(3)",
          delay: stagger(step),
          autoplay: onScroll({ target: root }),
        });
      }
      if (popTargets.length) {
        animate(popTargets, {
          opacity: [0, 1],
          scale: [0.4, 1],
          duration: 750,
          ease: "outBack(1.6)",
          delay: stagger(step),
          autoplay: onScroll({ target: root }),
        });
      }
    });

    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/**
 * Parallax scrolling: elemen [data-parallax] bergeser mengikuti progres
 * scroll ref (section). Gunakan enter: "start start" untuk section paling atas
 * agar posisi awal tepat 0 saat halaman dibuka.
 */
export const useParallax = (ref, options = {}) => {
  const { enter = "end start" } = options;

  useEffect(() => {
    const section = ref.current;
    if (!section || prefersReducedMotion()) return undefined;

    const elements = section.querySelectorAll("[data-parallax]");
    if (!elements.length) return undefined;

    const scope = createScope({ root: section }).add(() => {
      elements.forEach((el) => {
        const [from, to] = parseParallaxValue(el.dataset.parallax);
        animate(el, {
          translateY: [from, to],
          ease: "linear",
          autoplay: onScroll({ target: section, sync: true, enter }),
        });
      });
    });

    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

/**
 * Denyut lembut tanpa henti (mis. tombol WhatsApp) — hangat, tidak mengganggu.
 */
export const useSoftPulse = (ref, options = {}) => {
  const { duration = 1100, intensity = 0.04 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return undefined;

    const scope = createScope({ root: el }).add(() => {
      animate(el, {
        scale: [1, 1 + intensity],
        duration,
        ease: "inOutSine",
        loop: true,
        alternate: true,
      });
    });

    return () => scope.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
