import { useState } from "react";
import api from "../api/axios"; // Menggunakan instance axios yang sudah kita buat
import { useNavigate, Link } from "react-router-dom";

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

      alert("Registrasi Berhasil! Silakan Login.");
      navigate("/login"); // Pindah ke halaman login setelah sukses
    } catch (err) {
      alert("Registrasi Gagal: " + (err.response?.data?.message || "Terjadi kesalahan"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Daftar Kost-On</h2>
        <p className="text-center text-gray-500 mb-8">Cari kost impianmu sekarang</p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1">Nama Lengkap</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Masukkan nama lengkap"
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="nama@email.com"
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Min. 6 karakter"
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white transition ${loading ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700 shadow-lg'}`}
          >
            {loading ? "Mendaftarkan..." : "DAFTAR SEKARANG"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Sudah punya akun?{" "}
          <Link to="/login" className="text-blue-600 font-bold hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;