import { Routes, Route, Link } from "react-router-dom";
import { Home as HomeIcon, ArrowLeft } from "lucide-react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-cream text-cocoa">
      {/* Navbar muncul di semua halaman */}
      <Navbar />
      <Routes>
        {/* rute publik */}
        <Route path="/" element={<Home />} />

        {/* rute 404 - Jika alamat tidak ditemukan */}
        <Route
          path="*"
          element={
            <div className="max-w-md mx-auto mt-24 mb-16 text-center px-6">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-tint border border-sage/40 mb-5">
                <HomeIcon className="w-7 h-7 text-olive" strokeWidth={1.8} />
              </span>
              <h1 className="font-serif text-3xl font-semibold text-cocoa">
                404 — Sepertinya Kamu Tersesat
              </h1>
              <p className="text-mocha mt-3 leading-relaxed">
                Halaman ini tidak ditemukan, tapi jangan khawatir — jalan pulang
                selalu ada.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 mt-7 bg-terracotta-dark hover:bg-terracotta-deep text-cream font-bold px-6 py-3 rounded-full transition shadow-soft"
              >
                <ArrowLeft className="w-4 h-4" />
                Pulang ke Beranda
              </Link>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
