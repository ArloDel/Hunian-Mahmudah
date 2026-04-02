import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Room';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tambahkan route Login & Register nanti */}
      </Routes>
    </Router>
  );
}

export default App;