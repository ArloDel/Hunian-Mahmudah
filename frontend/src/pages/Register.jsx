import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { Home, Mail, Lock, User } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Mengirim data ke API Laravel (Route: /api/register)
      await api.post("/register", {
        name,
        email,
        password,
      });

      alert("Registrasi Berhasil! Silakan Masuk.");
      navigate("/login"); // Pindah ke halaman login setelah sukses
    } catch (err) {
      alert("Registrasi Gagal: " + (err.response?.data?.message || "Terjadi kesalahan"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cream px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-homey border border-sand-deep shadow-lifted">
        <div className="text-center mb-8">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-tint border border-sage/40 mb-4">
            <Home className="w-7 h-7 text-olive" strokeWidth={1.8} />
          </span>
          <h2 className="font-serif text-3xl font-semibold text-cocoa">
            Cari <span className="italic text-terracotta">Rumah Keduamu</span>
          </h2>
          <p className="text-mocha mt-2">
            Buat akun dulu, biar kamarnya bisa kamu simpan dan pesan.
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="nama" className="block text-sm font-bold text-cocoa mb-1.5">
              Nama Lengkap
            </label>
            <div className="flex items-center gap-3 bg-cream border border-sand-deep rounded-2xl px-5 focus-within:border-terracotta transition">
              <User className="w-5 h-5 text-terracotta shrink-0" />
              <input
                id="nama"
                type="text"
                className="w-full bg-transparent outline-none py-3.5 placeholder:text-mocha/70"
                placeholder="Nama panggilan atau lengkap"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-bold text-cocoa mb-1.5">
              Email
            </label>
            <div className="flex items-center gap-3 bg-cream border border-sand-deep rounded-2xl px-5 focus-within:border-terracotta transition">
              <Mail className="w-5 h-5 text-terracotta shrink-0" />
              <input
                id="email"
                type="email"
                className="w-full bg-transparent outline-none py-3.5 placeholder:text-mocha/70"
                placeholder="nama@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold text-cocoa mb-1.5">
              Password
            </label>
            <div className="flex items-center gap-3 bg-cream border border-sand-deep rounded-2xl px-5 focus-within:border-terracotta transition">
              <Lock className="w-5 h-5 text-terracotta shrink-0" />
              <input
                id="password"
                type="password"
                className="w-full bg-transparent outline-none py-3.5 placeholder:text-mocha/70"
                placeholder="Min. 6 karakter"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-full font-bold text-cream transition shadow-soft ${
              loading
                ? "bg-mocha/60 cursor-not-allowed"
                : "bg-terracotta-dark hover:bg-terracotta-deep"
            }`}
          >
            {loading ? "Menyiapkan akunmu..." : "Mulai Cari Kamar"}
          </button>
        </form>

        <p className="text-center mt-6 text-mocha">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-terracotta-deep font-bold hover:underline">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
