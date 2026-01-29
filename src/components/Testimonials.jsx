import React from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  // Kita gabungkan data 2x agar looping terlihat nyambung (seamless)
  const infiniteData = [...testimonialsData, ...testimonialsData];

  return (
    <section className="py-20 bg-secondary overflow-hidden"> {/* overflow-hidden wajib agar tidak ada scrollbar horizontal */}
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-dark mb-4">
            Kata Pelanggan
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Container Animasi */}
      <div className="w-full relative">
        {/* Gradient Overlay di Kiri & Kanan agar terlihat halus (fading effect) */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-secondary to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-secondary to-transparent"></div>

        {/* Track Berjalan */}
        <div className="flex gap-6 animate-scroll pl-6">
          {infiniteData.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} // Key unik kombinasi ID dan Index
              className="w-[350px] flex-shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-primary/10 relative hover:shadow-md transition"
            >
              <Quote className="absolute top-4 right-4 text-primary/20" size={32} />
              
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-accent text-sm mb-4 italic line-clamp-3">
                "{item.text}"
              </p>
              
              <div className="font-bold text-primary-dark text-sm">
                - {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;