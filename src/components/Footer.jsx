import React from "react";
import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
import logoKhana from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Kolom 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary-dark font-bold">
              <img
                src={logoKhana}
                alt="Logo Khana"
                className="w-12 h-12 rounded-full object-cover border border-primary/20 shadow-sm"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold text-secondary">
              KHANA
            </h2>
          </div>
          <p className="text-secondary/80 leading-relaxed mb-6">
            Layanan pijat dan totok profesional khusus wanita & bayi.
            Mengutamakan kenyamanan dan kesehatan alami keluarga Anda.
          </p>
        </div>

        {/* Kolom 2: Kontak & Alamat (Sesuai Gambar) */}
        <div>
          <h3 className="text-xl font-bold text-secondary mb-6">
            Hubungi Kami
          </h3>
          <ul className="space-y-4 text-secondary/80">
            <li className="flex items-start gap-3">
              <MapPin className="shrink-0 mt-1" size={20} />
              <span>
                Jl. Suka Karya Gg. Suka Rela,
                <br />
                Perumahan Sky Garden 4<br />
                (Belakang Pom Bensin Suka Karya)
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} />
              <a
                href="https://wa.me/6285355973505"
                className="hover:text-secondary transition"
              >
                0853-5597-3505
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Jam Operasional */}
        <div>
          <h3 className="text-xl font-bold text-secondary mb-6">
            Jam Operasional
          </h3>
          <ul className="space-y-2 text-secondary/80">
            <li className="flex justify-between">
              <span>Senin - Sabtu</span>
              <span>08.00 - 18.00</span>
            </li>
            <li className="flex justify-between">
              <span>Minggu</span>
              <span>Dengan Perjanjian</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 pt-8 text-center text-secondary/60 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pijat Totok Khana. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
