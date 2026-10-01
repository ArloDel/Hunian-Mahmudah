import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { Home, Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", { email, password });
      localStorage.setItem("token", res.data.access_token);
      alert("Selamat datang kembali di rumah!");
      navigate("/");
    } catch {
      alert("Login Gagal!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-cream px-4 py-12">
      {/* Kartu masuk dengan sudut sangat membulat (Tema B) */}
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 md:p-10 rounded-homey border border-sand-deep shadow-lifted"
      >
        <div className="text-center mb-8">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-terracotta-tint border border-terracotta/30 mb-4">
            <Home className="w-7 h-7 text-terracotta-deep" strokeWidth={1.8} />
          </span>
          <h2 className="font-serif text-3xl font-semibold text-cocoa">
            Selamat Datang <span className="italic text-terracotta">Kembali</span>
          </h2>
          <p className="text-mocha mt-2">
            Kamu kembali ke rumah kedua yang kamu pilih sendiri.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-cocoa mb-1.5">
              Email
            </label>
            <div className="flex items-center gap-3 bg-cream border border-sand-deep rounded-2xl px-5 focus-within:border-terracotta transition">
              <Mail className="w-5 h-5 text-terracotta shrink-0" />
              <input
                id="email"
                type="email"
                placeholder="nama@email.com"
                className="w-full bg-transparent outline-none py-3.5 placeholder:text-mocha/70"
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
                placeholder="Password kamu"
                className="w-full bg-transparent outline-none py-3.5 placeholder:text-mocha/70"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button className="w-full bg-terracotta-dark hover:bg-terracotta-deep text-cream py-3.5 rounded-full font-bold transition shadow-soft">
            Masuk ke Rumah
          </button>
        </div>

        <p className="text-center mt-6 text-mocha">
          Baru pertama kali ke sini?{" "}
          <Link to="/register" className="text-terracotta-deep font-bold hover:underline">
            Buat akun dulu ya
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
