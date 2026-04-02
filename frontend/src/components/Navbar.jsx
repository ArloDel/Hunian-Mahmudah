import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  // Cek apakah user sudah login dengan melihat token di localStorage
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Hapus token dan kembalikan ke halaman login
    localStorage.removeItem("token");
    alert("Anda telah logout");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      {/* Bagian Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 tracking-tight">
        Kost-<span className="text-green-500">On</span>
      </Link>

      {/* Bagian Menu Navigasi */}
      <div className="flex items-center space-x-6 font-medium">
        <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
          Cari Kost
        </Link>

        {!token ? (
          // TAMPILAN JIKA BELUM LOGIN
          <div className="flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Masuk
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-md"
            >
              Daftar
            </Link>
          </div>
        ) : (
          // TAMPILAN JIKA SUDAH LOGIN (JWT AKTIF)
          <div className="flex items-center space-x-4">
            <Link to="/booking-saya" className="text-gray-600 hover:text-blue-600">
              Booking Saya
            </Link>
            <button 
              onClick={handleLogout}
              className="bg-red-100 text-red-600 px-5 py-2 rounded-full font-bold hover:bg-red-200 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;