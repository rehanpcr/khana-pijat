import React from 'react';
import { MessageCircle } from 'lucide-react';
import fotoHome from "../assets/home.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center bg-primary/10">
      
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fotoHome} 
          alt="Suasana Spa Alami" 
          className="w-full h-full object-cover"
        />
        {/* Lapisan warna hijau transparan agar tulisan terbaca jelas */}
        <div className="absolute inset-0 bg-primary-dark/60 mix-blend-multiply"></div>
      </div>

      {/* Konten Teks */}
      <div className="container mx-auto px-6 relative z-10 pt-20 text-center md:text-left">
        <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary-dark font-bold text-sm mb-4 tracking-wider uppercase">
          Khusus Wanita & Bayi
        </span>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary mb-6 leading-tight">
          Kembalikan Keseimbangan <br/> 
          <span className="text-white">Tubuh & Pikiran Anda</span>
        </h1>
        
        <p className="text-lg md:text-xl text-secondary/90 mb-8 max-w-2xl leading-relaxed">
          Temukan kenyamanan dalam setiap totokan. Layanan pijat dan totok profesional yang bisa dipanggil langsung ke rumah Anda.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <a 
            href="https://wa.me/6285355973505?text=Halo%20Khana%2C%20saya%20ingin%20reservasi%20pijat."
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-secondary text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-white transition duration-300 shadow-lg"
          >
            <MessageCircle size={20} />
            Reservasi via WhatsApp
          </a>
          
          <a 
            href="#layanan" 
            className="px-8 py-4 rounded-full font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary-dark transition duration-300"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;