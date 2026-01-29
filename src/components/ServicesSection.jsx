import React from 'react';
import { servicesData } from '../data/services'; // Ambil data dari file tadi
import { Clock, Tag } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        
        {/* Judul Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
            Layanan Kami
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-accent max-w-xl mx-auto">
            Pilihan perawatan terbaik untuk kesehatan dan kecantikan Anda serta buah hati.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-primary/10 flex flex-col items-center text-center"
            >
              {/* Ikon Lingkaran */}
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-primary-dark mb-6">
                <service.icon size={32} />
              </div>

              <h3 className="text-xl font-bold text-primary-dark mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>

              {/* Garis Pemisah */}
              <div className="w-full border-t border-gray-100 my-4"></div>

              {/* Info Harga & Durasi */}
              <div className="w-full flex justify-between items-center text-sm font-medium">
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock size={14} />
                  <span>{service.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-primary font-bold">
                  <Tag size={14} />
                  <span>{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;