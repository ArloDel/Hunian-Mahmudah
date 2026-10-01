import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { useScrollReveal, useParallax } from "../../hooks/useAnime";

// Cerita penghuni: testimoni hangat dengan foto/avatar (PRD Tema B, komponen kunci)
const STORIES = [
  {
    name: "Dinda",
    stay: "Penghuni 2 tahun",
    initials: "D",
    quote:
      "Awalnya cuma nebeng sebulan, eh rasanya betah banget. Ibunya ramah, kamarnya bersih, berasa pulang ke rumah nenek.",
  },
  {
    name: "Nabila",
    stay: "Penghuni 1 tahun",
    initials: "N",
    quote:
      "Pulang malam dari kampus tetap tenang karena lingkungannya aman. Sudah seperti rumah kedua saya di kota ini.",
  },
  {
    name: "Rafi",
    stay: "Penghuni 6 bulan",
    initials: "R",
    quote:
      "Yang paling suka: dapoernya selalu wangi dan sofa ruang tamu itu. Sering ngobrol santai sama penghuni lain di sana.",
  },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  // Kartu cerita muncul lembut saat masuk viewport + blob dekoratif berparallax
  useScrollReveal(sectionRef, { selector: "[data-reveal]" });
  useParallax(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-sand py-16 md:py-20 px-6 md:px-8 mt-16 md:mt-24 texture-dots"
    >
      {/* Blob organik lembut — bergerak parallax dengan kecepatan berbeda */}
      <div
        className="absolute -top-16 -left-20 w-72 h-72 rounded-full bg-terracotta-tint/50 blur-3xl pointer-events-none"
        data-parallax="-70"
      />
      <div
        className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-sage-tint/60 blur-3xl pointer-events-none"
        data-parallax="90"
      />

      <div className="relative max-w-6xl mx-auto">
        <div data-reveal className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cocoa">
            Cerita Penghuni
          </h2>
          <p className="text-mocha mt-3 max-w-xl mx-auto">
            Kata mereka yang sudah merasakan pulang ke tempat yang terasa
            seperti rumah.
          </p>
          <div className="h-1 w-20 bg-terracotta mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((story) => (
            <article
              key={story.name}
              data-reveal
              className="relative bg-cream rounded-homey border border-sand-deep p-7 shadow-soft hover:shadow-lifted transition duration-300"
            >
              <Quote className="w-8 h-8 text-terracotta/40 absolute top-6 right-6" />

              <div className="flex items-center gap-4">
                {/* Avatar penghuni */}
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-sage-tint text-olive font-serif font-semibold text-lg border border-sage/40">
                  {story.initials}
                </span>
                <div>
                  <p className="font-bold text-cocoa leading-tight">{story.name}</p>
                  <p className="text-mocha text-xs mt-0.5">{story.stay}</p>
                </div>
              </div>

              <p className="text-cocoa/90 leading-relaxed mt-5">“{story.quote}”</p>

              <div className="flex gap-1 mt-5" aria-label="Rating 5 dari 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-terracotta" fill="currentColor" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
