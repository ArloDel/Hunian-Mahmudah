import { useRef, useState } from "react";
import { MapPin, Flower2, Clock, Search, ArrowRight } from "lucide-react";
import { useEntrance, useParallax } from "../../hooks/useAnime";

// Ilustrasi tangan sederhana: kamar nyaman ala Tema B (jendela, kasur, lampu, tanaman)
const CozyRoomIllustration = () => (
  <svg
    viewBox="0 0 560 420"
    fill="none"
    className="w-full h-auto"
    role="img"
    aria-label="Ilustrasi kamar yang hangat dan nyaman"
  >
    {/* Jendela dengan matahari */}
    <rect x="48" y="44" width="150" height="126" rx="16" fill="#FBF6EE" stroke="#C4673F" strokeWidth="5" />
    <circle cx="86" cy="80" r="14" fill="#C4673F" />
    <path d="M123 44v126M48 107h150" stroke="#C4673F" strokeWidth="5" strokeLinecap="round" />

    {/* Rak kecil, cangkir, dan bingkai foto */}
    <path d="M320 78h150" stroke="#3B2F2A" strokeWidth="6" strokeLinecap="round" />
    <rect x="336" y="36" width="34" height="30" rx="6" fill="#E8EFE5" stroke="#8FA58A" strokeWidth="4" />
    <rect x="392" y="44" width="28" height="26" rx="8" fill="#8FA58A" />
    <path d="M420 50c10 0 10 14 0 14" stroke="#8FA58A" strokeWidth="5" strokeLinecap="round" />
    <path d="M398 30c2-4-2-6 0-10M410 30c2-4-2-6 0-10" stroke="#7A6A60" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

    {/* Kasur dengan selimut terakota */}
    <rect x="44" y="196" width="256" height="48" rx="16" fill="#FBF6EE" stroke="#C4673F" strokeWidth="5" />
    <rect x="70" y="216" width="86" height="26" rx="13" fill="#F1E7D8" stroke="#C4673F" strokeWidth="4" />
    <rect x="36" y="232" width="272" height="124" rx="22" fill="#E8EFE5" stroke="#8FA58A" strokeWidth="5" />
    <path d="M36 296h272v38a22 22 0 0 1-22 22H58a22 22 0 0 1-22-22z" fill="#C4673F" />
    <ellipse cx="170" cy="388" rx="140" ry="11" fill="#F1E7D8" />

    {/* Lampu dengan cahaya hangat */}
    <circle cx="384" cy="120" r="56" fill="#C4673F" opacity="0.08" />
    <path d="M352 148h64l-10-44h-44z" fill="#F4DFD3" stroke="#C4673F" strokeWidth="5" strokeLinejoin="round" />
    <path d="M384 148v118" stroke="#3B2F2A" strokeWidth="6" strokeLinecap="round" />
    <ellipse cx="384" cy="272" rx="27" ry="7" fill="#3B2F2A" />

    {/* Tanaman sage dalam pot terakota */}
    <path d="M476 292c0-30-16-44-36-50 6 26 16 40 36 50z" fill="#8FA58A" />
    <path d="M476 292c0-38 12-54 34-62-2 30-14 48-34 62z" fill="#8FA58A" />
    <path d="M476 292c-2-24 2-40 0-58" stroke="#5E7F4D" strokeWidth="4" strokeLinecap="round" />
    <path d="M448 296h56l-8 48h-40z" fill="#C4673F" />
    <rect x="444" y="288" width="64" height="14" rx="7" fill="#A85432" />

    {/* Titik-titik aksen organik */}
    <circle cx="286" cy="70" r="4" fill="#C4673F" opacity="0.35" />
    <circle cx="510" cy="120" r="5" fill="#8FA58A" opacity="0.5" />
    <circle cx="330" cy="180" r="4" fill="#8FA58A" opacity="0.5" />
    <circle cx="30" cy="180" r="5" fill="#C4673F" opacity="0.3" />
  </svg>
);

const Hero = ({ onSearch }) => {
  const sectionRef = useRef(null);
  const [location, setLocation] = useState("");

  // Animasi masuk lembut (berjalan saat halaman dibuka) + parallax scroll
  useEntrance(sectionRef, { selector: "[data-entrance]" });
  useParallax(sectionRef, { enter: "start start" });

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(location);
    }
    document.getElementById("katalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Bentuk organik lembut di latar — bergerak parallax saat scroll */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sage-tint/70 blur-3xl pointer-events-none" data-parallax="170" />
      <div className="absolute -bottom-32 -left-24 w-96 h-96 rounded-full bg-terracotta-tint/60 blur-3xl pointer-events-none" data-parallax="-130" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-14 md:gap-10 items-center">
        {/* Kolom sapaan + pencarian */}
        <div className="text-center md:text-left">
          <span
            data-entrance
            className="inline-flex items-center gap-2 bg-sage-tint text-olive px-4 py-1.5 rounded-full text-sm font-semibold border border-sage/40"
          >
            <Flower2 className="w-4 h-4" />
            Selamat datang, cari rumah keduamu
          </span>

          <h1
            data-entrance
            className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-semibold leading-[1.15] text-cocoa mt-6"
          >
            Pulang ke Tempat yang{" "}
            <span className="italic text-terracotta">Terasa seperti Rumah</span>
          </h1>

          <p data-entrance className="text-mocha text-lg leading-relaxed mt-5 max-w-lg mx-auto md:mx-0">
            Kamar-kamar nyaman yang ditinggali dengan hati — bersih, aman, dan
            ibu kost yang ramah. Cerita hangatmu dimulai di sini.
          </p>

          {/* Pencarian lokasi */}
          <form
            data-entrance
            onSubmit={handleSearch}
            className="mt-8 flex items-center gap-2 bg-white/80 border border-sand-deep rounded-full p-2 pl-5 shadow-soft max-w-lg mx-auto md:mx-0 focus-within:border-terracotta transition"
          >
            <MapPin className="w-5 h-5 text-terracotta shrink-0" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Mau tinggal di area mana?"
              aria-label="Cari lokasi kost"
              className="flex-1 bg-transparent outline-none text-cocoa placeholder:text-mocha/70 min-w-0 py-2.5"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-terracotta-dark hover:bg-terracotta-deep text-cream font-bold px-5 md:px-7 py-3 rounded-full transition shrink-0"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Cari Kamar</span>
            </button>
          </form>

          {/* Label suasana sebagai chip cepat */}
          <div data-entrance className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 text-sm font-semibold">
            {["Tenang", "Khusus putri", "Dekat kampus", "Dekat taman"].map((chip) => (
              <span
                key={chip}
                className="bg-sand hover:bg-sage-tint text-cocoa px-4 py-2 rounded-full border border-sand-deep transition cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Kolom suasana kamar + profil ibu kost (berlapis parallax) */}
        <div className="relative">
          <div data-parallax="70">
            <div
              data-entrance
              className="bg-sand rounded-[2rem] border border-sand-deep p-6 md:p-10 shadow-lifted"
            >
              <CozyRoomIllustration />
              <p className="text-center text-mocha text-sm mt-4 font-semibold">
                Suasana kamar yang ditinggali — hangat dan tenang
              </p>
            </div>
          </div>

          {/* Profil ibu kost: sapaan + respons rata-rata */}
          <div
            data-parallax="150"
            className="absolute -bottom-8 inset-x-0 md:inset-x-auto md:left-8 flex justify-center md:justify-start pointer-events-none"
          >
            <div
              data-entrance
              className="pointer-events-auto bg-white rounded-3xl border border-sand-deep shadow-lifted px-5 py-4 flex items-center gap-4 w-max"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-terracotta-tint text-terracotta-deep font-serif font-semibold text-xl border border-terracotta/30">
                S
              </span>
              <div>
                <p className="font-bold text-cocoa leading-tight">Ibu Kost Sri</p>
                <p className="text-mocha text-xs sm:text-sm flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-olive" />
                  Respons rata-rata &lt; 1 jam
                </p>
              </div>
              <a
                href="#katalog"
                aria-label="Lihat kamar"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-sage-tint hover:bg-sage text-cocoa hover:text-cream transition border border-sage/40"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
