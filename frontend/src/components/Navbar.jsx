import { Link } from "react-router-dom";
import { Home, Heart } from "lucide-react";

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
      <div className="flex items-center gap-6 font-semibold text-[15px]">
        <Link
          to="/"
          className="flex items-center gap-1.5 text-mocha hover:text-terracotta transition"
        >
          <Heart className="w-4 h-4" />
          Cari Kamar
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
