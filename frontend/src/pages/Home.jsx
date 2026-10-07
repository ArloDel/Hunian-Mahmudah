import { useEffect, useRef, useState } from "react";
import { BedDouble } from "lucide-react";
import api from "../api/axios";
import { useScrollReveal } from "../hooks/useAnime";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import RoomCard from "../components/home/RoomCard";
import About from "../components/home/About";
import Footer from "../components/Footer";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const catalogRef = useRef(null);

  // Judul katalog muncul lembut saat digulir (katalog selalu dirender)
  useScrollReveal(catalogRef, { selector: "[data-reveal]" });

  useEffect(() => {
    api
      .get("/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredRooms = normalizedSearch
    ? rooms.filter((room) => {
        const matchNumber = room.room_number?.toLowerCase().includes(normalizedSearch);
        const matchDescription = room.description?.toLowerCase().includes(normalizedSearch);
        return matchNumber || matchDescription;
      })
    : rooms;

  return (
    <div className="bg-cream min-h-screen text-cocoa">
      {/* 1. Hero: sapaan ramah + pencarian */}
      <Hero onSearch={setSearchTerm} />

      {/* 2. Cerita penghuni */}
      <Testimonials />

      {/* 3. Kartu kost dengan label suasana */}
      <section id="katalog" ref={catalogRef} className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cocoa">
              Kamar yang Menunggu Kamu{" "}
              <span className="italic text-terracotta">Pulang</span>
            </h2>
            <p className="text-mocha mt-3 max-w-xl mx-auto">
              Pilih kamarnya, lalu jadwalkan survei — biar makin yakin sebelum
              memutuskan pulang.
            </p>
            <div className="h-1 w-20 bg-terracotta mx-auto mt-5 rounded-full" />
          </div>

          {loading ? (
            // Skeleton kartu yang lembut saat memuat
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-homey border border-sand-deep overflow-hidden shadow-soft animate-pulse"
                >
                  <div className="h-56 bg-sand" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 w-1/3 bg-sand rounded-full" />
                    <div className="h-4 w-full bg-sand rounded-full" />
                    <div className="h-4 w-2/3 bg-sand rounded-full" />
                    <div className="h-10 w-36 bg-sand rounded-full mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : rooms.length === 0 ? (
            // Keadaan kosong dengan nada hangat
            <div className="max-w-md mx-auto bg-white rounded-homey border border-sand-deep p-10 text-center shadow-soft">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-tint border border-sage/40 mb-5">
                <BedDouble className="w-7 h-7 text-olive" strokeWidth={1.8} />
              </span>
              <h3 className="font-serif text-xl font-semibold text-cocoa">
                Kamarnya sedang disiapkan
              </h3>
              <p className="text-mocha text-sm leading-relaxed mt-2">
                Ibu kost sedang merapikan beberapa kamar. Coba kembali lagi
                nanti, ya.
              </p>
            </div>
          ) : filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredRooms.map((room, index) => (
                <RoomCard key={room.id} room={room} index={index} />
              ))}
            </div>
          ) : (
            // Hasil pencarian tidak ada yang cocok
            <div className="max-w-md mx-auto bg-white rounded-homey border border-sand-deep p-10 text-center shadow-soft">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta-tint border border-terracotta/30 mb-5">
                <BedDouble className="w-7 h-7 text-terracotta-deep" strokeWidth={1.8} />
              </span>
              <h3 className="font-serif text-xl font-semibold text-cocoa">
                Tidak ada kamar yang cocok
              </h3>
              <p className="text-mocha text-sm leading-relaxed mt-2">
                Coba kata kunci lain, atau tanya Ibu Kost langsung.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 4. Kenapa terasa seperti di rumah */}
      <About />

      {/* 5. Footer dengan kontak WhatsApp menonjol */}
      <Footer />
    </div>
  );
};

export default Home;
