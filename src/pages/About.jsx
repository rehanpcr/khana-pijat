import React from "react";
import { MapPin, CheckCircle } from "lucide-react";
import fotoTentang from "../assets/about.jpg";

const About = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Bagian Atas: Deskripsi & Gambar */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          {/* Foto/Gambar Ilustrasi */}
          <div className="w-full md:w-1/2">
            <img
              src={fotoTentang}
              alt="Tentang Khana"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>

          {/* Teks Penjelasan */}
          <div className="w-full md:w-1/2">
            <h4 className="text-primary font-bold tracking-wider uppercase mb-2">
              Tentang Kami
            </h4>
            <h1 className="text-4xl font-serif font-bold text-primary-dark mb-6">
              Khana: Pijat & Totok Profesional
            </h1>
            <p className="text-accent leading-relaxed mb-6">
              Kami hadir untuk memberikan solusi kesehatan alami bagi wanita dan
              bayi. Dengan terapis yang berpengalaman dan bersertifikat, kami
              mengutamakan kenyamanan, kebersihan, dan privasi setiap pelanggan.
            </p>
            <p className="text-accent leading-relaxed mb-8">
              Layanan kami mencakup totok wajah untuk kecantikan aura, pijat
              relaksasi tubuh, hingga perawatan khusus bayi. Semua dapat
              dinikmati di kenyamanan rumah Anda (Home Care).
            </p>

            {/* List Keunggulan */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={20} />
                <span className="font-medium text-primary-dark">
                  Terapis Wanita Profesional
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={20} />
                <span className="font-medium text-primary-dark">
                  Bisa Dipanggil ke Rumah (Home Care)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-primary" size={20} />
                <span className="font-medium text-primary-dark">
                  Produk Alami & Higenis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bagian Lokasi & Peta */}
        <div className="bg-secondary p-8 rounded-2xl border border-primary/20 text-center">
          <MapPin className="mx-auto text-primary mb-4" size={60} />
          <h3 className="text-3xl font-bold text-primary-dark mb-6">
            Lokasi Kami
          </h3>

          {/* IFRAME GOOGLE MAPS */}
          <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.562669860689!2d101.38174067496469!3d0.4425010995531645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a9002da5a7db%3A0xa142fd452e6b71a5!2sKhana%20Pijat%20Totok!5e1!3m2!1sid!2sid!4v1769685608581!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Catatan: Saya menggunakan link embed dummy yang mengarah ke Jl. Suka Karya. 
              Jika peta tidak pas, ganti isi 'src="..."' dengan link dari iframe yang Anda punya. */}
        </div>
      </div>
    </div>
  );
};

export default About;
