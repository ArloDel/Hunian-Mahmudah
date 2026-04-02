import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center px-10">
      <Link to="/" className="text-2xl font-bold text-blue-600">Kost-On</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">Cari Kost</Link>
        <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;