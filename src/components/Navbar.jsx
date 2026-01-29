import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // 1. Tambah useLocation
import logoKhana from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // 2. Ambil lokasi URL saat ini

  // 3. Fungsi untuk menentukan style menu aktif vs tidak
  const navClass = (path) => {
    // Jika path sama dengan URL browser, return style Aktif
    if (location.pathname === path) {
      return "text-primary font-bold border-b-2 border-primary pb-1";
    }
    // Jika tidak, return style biasa
    return "text-primary-dark hover:text-primary transition pb-1 border-b-2 border-transparent";
  };

  return (
    <nav className="bg-secondary shadow-sm fixed w-full z-50 top-0 left-0 border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
            <img
              src={logoKhana}
              alt="Logo Khana"
              className="w-12 h-12 rounded-full object-cover border border-primary/20 shadow-sm"
            />
          </div>
          <div>
            <h1 className="text-xl font-serif font-bold text-primary-dark tracking-wide">
              KHANA
            </h1>
            <p className="text-[10px] text-accent tracking-wider uppercase">
              Pijat & Totok Wanita
            </p>
          </div>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {/* Terapkan fungsi navClass di sini */}
          <Link to="/" className={navClass("/")}>
            Beranda
          </Link>
          <Link to="/layanan" className={navClass("/layanan")}>
            Layanan & Harga
          </Link>
          <Link to="/tentang" className={navClass("/tentang")}>
            Tentang Kami
          </Link>

          <a
            href="https://wa.me/6285355973505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition shadow-md"
          >
            <Phone size={18} />
            <span>Reservasi</span>
          </a>
        </div>

        {/* TOMBOL MENU MOBILE (HP) */}
        <button
          className="md:hidden text-primary-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE DROP DOWN */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-gray-200 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4 font-medium text-center">
            {/* Terapkan juga logic aktif di menu mobile */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={
                location.pathname === "/"
                  ? "text-primary font-bold"
                  : "text-primary-dark"
              }
            >
              Beranda
            </Link>

            <Link
              to="/layanan"
              onClick={() => setIsOpen(false)}
              className={
                location.pathname === "/layanan"
                  ? "text-primary font-bold"
                  : "text-primary-dark"
              }
            >
              Layanan & Harga
            </Link>

            <Link
              to="/tentang"
              onClick={() => setIsOpen(false)}
              className={
                location.pathname === "/tentang"
                  ? "text-primary font-bold"
                  : "text-primary-dark"
              }
            >
              Tentang Kami
            </Link>

            <a
              href="https://wa.me/6285355973505"
              target="_blank"
              className="bg-primary text-white py-2 rounded-full mx-8 mt-2"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
