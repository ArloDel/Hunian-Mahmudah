import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/login', { email, password });
            localStorage.setItem('token', res.data.access_token);
            alert('Selamat Datang!');
            navigate('/');
        } catch (err) {
            alert('Login Gagal!');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Login Kost-On</h2>
                <input type="email" placeholder="Email" className="w-full p-3 mb-4 border rounded-lg" 
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" className="w-full p-3 mb-6 border rounded-lg" 
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                    MASUK
                </button>
            </form>
        </div>
    );
};

export default Login;