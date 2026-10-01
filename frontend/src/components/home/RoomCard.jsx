import { useRef, useState } from "react";
import { BedDouble, Wifi, Wind, Bath, ArrowRight } from "lucide-react";
import { useScrollReveal, useParallax } from "../../hooks/useAnime";

// Label suasana berbentuk pil (PRD Tema B: kartu kost dengan label suasana)
const VIBES = ["Tenang", "Dekat taman", "Khusus putri", "Sejuk"];
const VIBE_STYLES = [
  "bg-sage-tint text-olive border-sage/40",
  "bg-sand text-cocoa border-sand-deep",
  "bg-terracotta-tint text-terracotta-deep border-terracotta/30",
  "bg-sand text-cocoa border-sand-deep",
];

// Ulasan singkat penghuni yang tampil di kartu (PRD Tema B: komponen kunci)
const SNIPPETS = [
  "“Bersih, tenang, ibu kostnya ramah.” — Dinda",
  "“Berasa rumah sendiri, betah.” — Nadia",
  "“Lingkungannya aman dan sejuk.” — Rafi",
  "“Sofa ruang tamunya paling favorit.” — Kirana",
];

const RoomCard = ({ room, index = 0 }) => {
  const articleRef = useRef(null);
  // Jika foto gagal dimuat (mis. server/storage belum siap), tampilkan ilustrasi suasana
  const [imageError, setImageError] = useState(false);

  // Kartu muncul lembut saat masuk viewport; foto kamar berparallax saat scroll
  useScrollReveal(articleRef, { selector: null });
  useParallax(articleRef);

  const vibe = VIBES[index % VIBES.length];
  const vibeStyle = VIBE_STYLES[index % VIBE_STYLES.length];
  const snippet = SNIPPETS[index % SNIPPETS.length];

  return (
    // Pembungkus polos agar inline transform anime.js tidak menimpa hover
    <article ref={articleRef} className="group h-full">
      <div className="flex flex-col h-full bg-white rounded-homey border border-sand-deep overflow-hidden shadow-soft hover:shadow-lifted hover:-translate-y-1 transition duration-300">
        {/* Foto kamar / ilustrasi placeholder suasana — media berparallax */}
        <div className="relative overflow-hidden h-56">
          <div
            data-parallax="-28,28"
            className="absolute inset-x-0 -top-[16%] h-[132%]"
          >
            {room.image && !imageError ? (
              <img
                src={room.image}
                alt={`Kamar ${room.room_number}`}
                loading="lazy"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-sand via-cream to-sage-tint flex flex-col items-center justify-center gap-2 border-b border-sand-deep">
                <BedDouble className="w-12 h-12 text-terracotta" strokeWidth={1.6} />
                <span className="text-mocha text-sm font-semibold italic">
                  Suasana kamar {room.room_number}
                </span>
              </div>
            )}
          </div>

          {/* Label suasana berbentuk pil */}
          <span
            className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm ${vibeStyle}`}
          >
            {vibe}
          </span>

          {/* Status ketersediaan */}
          {room.is_available ? (
            <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-bold bg-cream/90 text-olive border border-olive/30">
              Tersedia
            </span>
          ) : (
            <span className="absolute top-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-bold bg-mocha/90 text-cream">
              Penuh
            </span>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-serif text-xl font-semibold text-cocoa">
            Kamar {room.room_number}
          </h3>

          <p className="text-mocha text-sm leading-relaxed mt-2 line-clamp-2">
            {room.description}
          </p>

          {/* Ikon fasilitas maksimal 4 (PRD fitur inti) */}
          <div className="flex gap-4 mt-4 text-mocha" aria-label="Fasilitas kamar">
            <Wifi className="w-5 h-5" />
            <Wind className="w-5 h-5" />
            <Bath className="w-5 h-5" />
            <BedDouble className="w-5 h-5" />
          </div>

          {/* Ulasan singkat penghuni */}
          <p className="text-sm text-cocoa/80 italic mt-4 pt-4 border-t border-sand-deep/70">
            {snippet}
          </p>

          <div className="flex items-end justify-between gap-4 mt-5">
            <div>
              <p className="text-terracotta-deep font-extrabold text-lg leading-tight">
                Rp {room.price.toLocaleString("id-ID")}
              </p>
              <p className="text-mocha text-xs">per bulan</p>
            </div>

            {/* Tombol utama Tema B: terakota, teks krem, "Cek Kamarnya" */}
            <button className="flex items-center gap-1.5 bg-terracotta-dark hover:bg-terracotta-deep text-cream font-bold px-5 py-2.5 rounded-full transition">
              Cek Kamarnya
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RoomCard;
