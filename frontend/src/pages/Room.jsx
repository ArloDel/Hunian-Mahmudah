import { useEffect, useState } from 'react';
import api from '../api/axios';
import Navbar from '../components/navbar';

const Home = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    api.get('/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Daftar Kamar Tersedia</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map(room => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-300"></div> {/* Tempat Foto */}
              <div className="p-4">
                <h2 className="text-xl font-bold">Kamar {room.room_number}</h2>
                <p className="text-gray-600 my-2">{room.description}</p>
                <p className="text-blue-600 font-bold">Rp {room.price.toLocaleString()} / bulan</p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;