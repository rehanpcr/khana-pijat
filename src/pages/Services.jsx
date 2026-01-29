import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { Phone } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-20"> {/* Padding top agar tidak tertutup Navbar */}
      
      

      {/* Menampilkan Komponen Layanan yg sudah ada */}
      <ServicesSection />

      {/* CTA Tambahan di Bawah */}
      <div className="container mx-auto px-6 pb-20 text-center">
        <div className="bg-primary rounded-2xl p-8 text-white shadow-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Bingung memilih layanan?</h3>
          <p className="mb-6 text-white/90">Konsultasikan keluhan Anda kepada kami. Kami akan merekomendasikan terapi yang paling tepat.</p>
          <a 
            href="https://wa.me/6285355973505" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-primary-dark px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            <Phone size={20} />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;