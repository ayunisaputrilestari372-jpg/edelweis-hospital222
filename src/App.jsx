import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function App() {
  const [menu, setMenu] = useState("home");

  const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">

      {/* HEADER */}
      <header className="bg-blue-600 text-white text-center p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Edelweis Hospital</h1>
        <p className="text-sm mt-1">Pelayanan Kesehatan Modern & Profesional</p>
      </header>

      {/* NAVBAR */}
      <nav className="flex justify-center gap-4 bg-white shadow-md p-3 sticky top-0 z-10">
        <Button onClick={() => setMenu("home")} variant="outline">Home</Button>
        <Button onClick={() => setMenu("layanan")} variant="outline">Layanan</Button>
        <Button onClick={() => setMenu("kontak")} variant="outline">Kontak</Button>
      </nav>

      {/* CONTENT */}
      <main className="p-6 max-w-5xl mx-auto">

        {menu === "home" && (
          <motion.div initial="hidden" animate="show" variants={fade}>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-3">Selamat Datang</h2>
                <p className="text-gray-600">
                  Edelweis Hospital hadir dengan fasilitas lengkap dan tenaga medis terbaik untuk memberikan pelayanan kesehatan yang cepat, aman, dan nyaman.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {menu === "layanan" && (
          <motion.div initial="hidden" animate="show" variants={fade} className="grid md:grid-cols-3 gap-4">
            {["Rawat Jalan", "Rawat Inap", "UGD 24 Jam", "Laboratorium", "Radiologi", "Apotek"].map((item, i) => (
              <Card key={i} className="rounded-2xl shadow-lg hover:scale-105 transition">
                <CardContent className="p-5 text-center">
                  <h3 className="font-semibold text-lg">{item}</h3>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}

        {menu === "kontak" && (
          <motion.div initial="hidden" animate="show" variants={fade}>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-6 space-y-2">
                <h2 className="text-2xl font-bold mb-3">Kontak Kami</h2>
                <p>📍 Jl. Soekarno-Hatta No.550, Sekejati, Kec. Buahbatu, Kota Bandung, Jawa Barat 40286</p>
                <p>📞 088-8602-3000</p>
                <p>✉️ info@edelweiss.id</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center p-4 mt-10">
        © 2026 Edelweis Hospital
      </footer>
    </div>
  );
}