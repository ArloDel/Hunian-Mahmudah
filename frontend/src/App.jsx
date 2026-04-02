import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Room";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/navbar";

// Komponen Pembantu untuk Proteksi Halaman
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar muncul di semua halaman */}
      <Navbar /> 

      <Routes>
        {/* rute publik */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* rute terproteksi (Contoh: Halaman Dashboard/Booking) */}
        <Route 
          path="/booking/:id" 
          element={
            <ProtectedRoute>
              <div className="p-10 text-center text-2xl font-bold">
                Halaman Konfirmasi Booking (Hanya untuk User Login)
              </div>
            </ProtectedRoute>
          } 
        />

        {/* rute 404 - Jika alamat tidak ditemukan */}
        <Route path="*" element={<div className="text-center mt-20 text-xl font-semibold">404 - Halaman Tidak Ditemukan</div>} />
      </Routes>
    </div>
  );
}

export default App;