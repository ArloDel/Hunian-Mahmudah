import { Link } from "react-router-dom";
import { Home, Heart, MessageCircle } from "lucide-react";
import { buildGeneralInquiryUrl } from "../lib/whatsapp";

const Navbar = () => {
  return (
    <nav className="bg-cream/90 backdrop-blur-md border-b border-sand-deep/60 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      {/* Bagian Logo — tulisan lembut ala Tema B */}
      <Link to="/" className="flex items-center gap-2 group">
        <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-sage-tint border border-sage/40">
          <Home className="w-5 h-5 text-terracotta" strokeWidth={2.2} />
        </span>
        <span className="font-serif text-2xl font-semibold tracking-tight text-cocoa">
          Kost-<span className="italic text-terracotta">On</span>
        </span>
      </Link>

      {/* Bagian Menu Navigasi */}
      <div className="flex items-center gap-4 sm:gap-6 font-semibold text-[15px]">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-mocha hover:text-terracotta transition"
        >
          <Heart className="w-4 h-4" />
          Cari Kamar
        </Link>
        <a
          href={buildGeneralInquiryUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 bg-olive text-cream px-4 py-2 rounded-full hover:bg-sage transition shadow-sm"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Tanya Ibu Kost</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
