import { useRef } from "react";
import { Home, MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useSoftPulse } from "../hooks/useAnime";

const Footer = () => {
  const whatsappRef = useRef(null);

  // Tombol WhatsApp berdenyut lembut — hangat dan mengundang sapa
  useSoftPulse(whatsappRef);

  return (
    <footer className="bg-cocoa text-cream/80 py-14 md:py-16 px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + tagline hangat */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-terracotta/20 border border-terracotta/40">
              <Home className="w-5 h-5 text-terracotta" strokeWidth={2.2} />
            </span>
            <h2 className="font-serif text-2xl font-semibold text-cream">
              Kost-<span className="italic text-terracotta">On</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed">
            Pulang ke tempat yang terasa seperti rumah — kamar nyaman, ibu kost
            ramah, dan tetangga yang menyenangkan.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-cream font-bold mb-4 font-serif text-lg">Jelajahi</h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/" className="hover:text-terracotta transition">
                Beranda
              </a>
            </li>
            <li>
              <a href="#katalog" className="hover:text-terracotta transition">
                Cari Kamar
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-cream font-bold mb-4 font-serif text-lg">Kontak</h3>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-sage" />
              +62 812 3456 789
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sage" />
              halo@kost-on.id
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
              Jl. Kenanga No. 12, Yogyakarta
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sage" />
              Setiap hari, 08.00–20.00
            </li>
          </ul>
        </div>

        {/* Kontak WhatsApp yang menonjol (PRD Tema B) */}
        <div>
          <h3 className="text-cream font-bold mb-4 font-serif text-lg">
            Ada yang mau ditanya?
          </h3>
          <p className="text-sm mb-4 leading-relaxed">
            Ibu kost siap bantu — biasanya dibalas dalam satu jam.
          </p>
          <a
            ref={whatsappRef}
            href="https://wa.me/628123456789"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 bg-olive hover:bg-sage text-cream font-bold px-6 py-3.5 rounded-full transition shadow-lifted border border-cream/10"
          >
            <MessageCircle className="w-5 h-5" />
            Chat WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-7 border-t border-cream/10 text-center text-xs text-cream/50">
        &copy; 2026 Kost-On. Dibuat dengan hangat untuk kamu yang jauh dari rumah.
      </div>
    </footer>
  );
};

export default Footer;
