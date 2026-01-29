import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';

function App() {
  return (
    <Router>
      {/* RAHASIA AGAR FOOTER SELALU DI BAWAH:
         1. min-h-screen : Tinggi minimal container adalah 100% layar.
         2. flex flex-col : Mengatur elemen berurutan ke bawah.
      */}
      <div className="min-h-screen bg-secondary font-sans text-accent flex flex-col">
        
        <Navbar />

        {/* 3. flex-grow : Bagian ini akan "tumbuh" mengisi ruang kosong 
           sehingga Footer terdorong ke paling bawah.
        */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan" element={<Services />} />
            <Route path="/tentang" element={<About />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;