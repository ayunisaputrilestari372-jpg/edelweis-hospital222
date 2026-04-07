import { useState } from "react";
import gedung from "./assets/gedung.webp";

function App() {
  const [menu, setMenu] = useState("home");

  // ✅ TAMBAHAN (STATE)
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  // ✅ TAMBAHAN (FUNCTION KIRIM)
  const handleSubmit = async () => {
    if (!nama || !pesan) {
      alert("Isi dulu semua field!");
      return;
    }

    const data = {
      nama: nama,
      pesan: pesan,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzeIA2XfDOQ_VoiTzA0CP2Pfsi2TAsBEBdYill2CijZwoMu8qbgcesIVgeAEWrD4B0u/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      alert("Saran berhasil dikirim!");
      setNama("");
      setPesan("");
    } catch (error) {
      alert("Gagal mengirim!");
    }
  };

  return (
    <div style={styles.container}> 
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>Edelweis Hospital</h1>
        <p style={{ margin: 0, fontSize: "14px" }}>
          Pelayanan Kesehatan Terbaik
        </p>
      </header>

      <nav style={styles.nav}>
        <button
          onClick={() => setMenu("home")}
          style={menu === "home" ? styles.activeBtn : styles.btn}
        >
          Home
        </button>
        <button
          onClick={() => setMenu("layanan")}
          style={menu === "layanan" ? styles.activeBtn : styles.btn}
        >
          Layanan
        </button>
        <button
          onClick={() => setMenu("kontak")}
          style={menu === "kontak" ? styles.activeBtn : styles.btn}
        >
          Kontak
        </button>
      </nav>

      <div style={styles.content}>
      {/* HOME */}
      {menu === "home" && (
          <div style={styles.card}>
            <img src={gedung} alt="Rumah Sakit" style={styles.image} />

            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h2>Selamat Datang di Edelweis Hospital 👋</h2>
              <p>
                Edelweis Hospital hadir sebagai rumah sakit modern yang berkomitmen memberikan pelayanan kesehatan terbaik kepada masyarakat.
                Dengan didukung oleh tenaga medis profesional, fasilitas lengkap, serta teknologi terkini, Edelweis Hospital menjadi mitra terpercaya dalam menjaga dan meningkatkan kualitas kesehatan pasien.
                Kami mengutamakan pelayanan yang cepat, tepat, serta penuh kepedulian demi kenyamanan dan keselamatan setiap pasien.
              </p>
            </div>

            <div style={styles.grid2}>
              <div style={styles.box}>
                <h3>Misi</h3>
                <ul style={styles.list}>
                  <li>Memberikan pengalaman terbaik dalam pelayanan dan keselamatan pasienn, dengah penuh kasih sayang serta terpercaya sesuai dengan kebutuhan setiap pasien</li>
                  <li>Mempersiapkan insan perumahsakitan yang unggul, profesional dan berorientasi pada pelayanan terbaik  kepada pasien</li>
                  <li>Memberikan layanan kesehatan terbaik untuk masyarakat berbasis riset, data, dan fakta</li>
                </ul>
              </div>

              <div style={styles.box}>
                <h3>Visi</h3>
                <p>
                  Menjadi pilihan utama sebagai penyedia layanan kesehatan terintegrasi,
                  yang berfokus pada pelayanan berkualitas.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LAYANAN */}
        {menu === "layanan" && (
          <div style={styles.card}>
          <h2 style={{ color: "blue" }}>Layanan Kami</h2>
            <div style={styles.section}>
              <h3 style={{ color: "#1e3a8a" }}>Pusat Unggulan</h3>           
              <ul style={styles.list}>
                <li>Brain Center & Neurosurgery</li>
                <li>Mother & Children Center</li>
                <li>Pain Center</li>
                <li>Wellness & Aesthetic</li>
                <li>Golden Senior Care</li>
                <li>Stem Cell Therapy</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={{ color: "#1e3a8a" }}>Layanan Umum</h3>           
              <ul style={styles.list}>
                <li>IGD 24 Jam</li>
                <li>Poli Rawat Jalan</li>
                <li>Radiologi & Laboratorium</li>
                <li>Rehabilitasi Medis</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={{ color: "#1e3a8a" }}>Paket Layanan</h3>           
              <ul style={styles.list}>
                <li>Medical Check Up</li>
                <li>Paket Persalinan</li>
                <li>Paket Khitan Anak</li>
              </ul>
            </div>
          </div>
        )}

        {/* KONTAK */}
        {menu === "kontak" && (
          <div style={styles.card}>
            <h2 style={styles.title}>Kontak Kami</h2>

            <div style={styles.section}>
              <p>📍 <b>Alamat:</b> Jl. Soekarno Hatta No. 550, Bandung</p>
              <p>📞 <b>Telepon:</b> (022) 860 23 000</p>
              <p>✉️ <b>Email:</b> info@edelweiss.id</p>
            </div>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.waBtn}
            >
              💬 Chat WhatsApp
            </a>

            <div style={styles.section}>
              <h3>Jam Operasional</h3>
              <p>🕐 IGD: 24 Jam</p>
              <p>🕘 Poli: 08.00 - 20.00 WIB</p>
            </div>

            {/* MAP */}
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Soekarno-Hatta+No.550+Bandung"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                📍 Lihat Lokasi Edelweis Hospital
              </a>
            </div>

            {/* FORM */}
            <div style={styles.section}>
              <h3>Kirim Saran</h3>

              <input
                type="text"
                placeholder="Nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                style={styles.input}
              />

              <textarea
                placeholder="Tulis pesan atau saran..."
                rows="4"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                style={styles.textarea}
              />

              <button onClick={handleSubmit} style={styles.sendBtn}>
                Kirim
              </button>
            </div>
          </div>
        )}
      </div>

      <footer style={styles.footer}>© 2026 Edelweis Hospital</footer>
    </div>
  );
}