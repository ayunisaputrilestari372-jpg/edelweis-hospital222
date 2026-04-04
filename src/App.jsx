import { useState } from "react";

export default function App() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-blue-600 text-white text-center p-5">
        <h1 className="text-2xl font-bold">Edelweis Hospital</h1>
        <p>Pelayanan Kesehatan Terbaik</p>
      </header>

      {/* NAVBAR */}
      <nav className="flex justify-center bg-blue-500 text-white">
        <button onClick={() => setMenu("home")} className="p-4 hover:bg-blue-700">Home</button>
        <button onClick={() => setMenu("layanan")} className="p-4 hover:bg-blue-700">Layanan</button>
        <button onClick={() => setMenu("kontak")} className="p-4 hover:bg-blue-700">Kontak</button>
      </nav>

      {/* CONTENT */}
      <main className="p-8">

        {menu === "home" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Selamat Datang</h2>
            <p>Edelweis Hospital adalah rumah sakit modern dengan fasilitas lengkap.</p>
          </div>
        )}

        {menu === "layanan" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Layanan</h2>
            <ul className="list-disc pl-5">
              <li>Rawat Jalan</li>
              <li>Rawat Inap</li>
              <li>UGD 24 Jam</li>
            </ul>
          </div>
        )}

        {menu === "kontak" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Kontak</h2>
            <p>Alamat: Jl. Kesehatan No.123</p>
            <p>Telepon: 08123456789</p>
          </div>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white text-center p-4">
        © 2026 Edelweis Hospital
      </footer>

    </div>
  );
}