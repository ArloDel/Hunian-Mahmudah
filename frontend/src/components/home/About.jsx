import { useRef } from "react";
import { ShieldCheck, Sparkles, Coffee, MessageCircle } from "lucide-react";
import { useScrollReveal } from "../../hooks/useAnime";

// "Kenapa terasa seperti di rumah" — keamanan, kebersihan, ibu kost ramah (PRD Tema B)
const REASONS = [
  {
    icon: ShieldCheck,
    title: "Aman sejak langkah pertama",
    text: "Setiap kost kami survei langsung: pintu dan jendela berkunci, lingkungan terang, dan tetangga yang saling menjaga.",
  },
  {
    icon: Sparkles,
    title: "Bersih seperti rumah sendiri",
    text: "Area bersama dirawat tiap hari, sampah diambil terjadwal, dan cahaya masuk lewat jendela di setiap kamar.",
  },
  {
    icon: Coffee,
    title: "Ibu kost yang ramah",
    text: "Dari sapaan pertama sampai bantu titip paket, ibu kost kami hadir seperti keluarga — tanpa drama, tanpa ribet.",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  // Kartu alasan & statistik muncul lembut; ikon muncul dengan pop hangat
  useScrollReveal(sectionRef, {
    selector: "[data-reveal]",
    popSelector: "[data-reveal-pop]",
  });

  return (
    <section ref={sectionRef} className="bg-sand py-16 md:py-24 px-6 md:px-8 mt-16 md:mt-24">
      <div className="max-w-6xl mx-auto">
        <div data-reveal className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cocoa">
            Kenapa Terasa seperti <span className="italic text-terracotta">di Rumah</span>
          </h2>
          <p className="text-mocha mt-3 max-w-xl mx-auto">
            Bukan cuma kamar yang nyaman — tapi cara kami merawatnya dan menyambutmu.
          </p>
          <div className="h-1 w-20 bg-terracotta mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason) => (
            <article
              key={reason.title}
              data-reveal
              className="bg-cream rounded-homey border border-sand-deep p-7 text-center shadow-soft hover:shadow-lifted transition duration-300"
            >
              <span
                data-reveal-pop
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta-tint border border-terracotta/30 mb-5"
              >
                <reason.icon className="w-7 h-7 text-terracotta-deep" strokeWidth={1.8} />
              </span>
              <h3 className="font-serif text-xl font-semibold text-cocoa">
                {reason.title}
              </h3>
              <p className="text-mocha text-sm leading-relaxed mt-3">
                {reason.text}
              </p>
            </article>
          ))}
        </div>

        {/* Statistik hangat + ajak ngobrol */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div data-reveal className="bg-cream rounded-homey border border-sand-deep p-6 text-center shadow-soft flex flex-col justify-center">
            <span className="block font-serif text-3xl font-semibold text-terracotta-deep">
              500+
            </span>
            <span className="text-mocha text-sm mt-1">kamar terawat</span>
          </div>
          <div data-reveal className="bg-cream rounded-homey border border-sand-deep p-6 text-center shadow-soft flex flex-col justify-center">
            <span className="block font-serif text-3xl font-semibold text-terracotta-deep">
              1.000+
            </span>
            <span className="text-mocha text-sm mt-1">penghuni merasa di rumah</span>
          </div>
          <a
            data-reveal
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noreferrer"
            className="bg-sage-tint hover:bg-sage rounded-homey border border-sage/40 p-6 flex items-center justify-center gap-3 transition group"
          >
            <MessageCircle className="w-6 h-6 text-olive group-hover:text-cream transition" />
            <div>
              <p className="font-bold text-cocoa group-hover:text-cream transition leading-tight">
                Masih ragu?
              </p>
              <p className="text-mocha text-sm group-hover:text-cream/90 transition">
                Ngobrol dulu sama ibu kost
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
