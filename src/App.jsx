import { useState } from "react";
import gedung from "./assets/gedung.webp";

function App() {
  const [menu, setMenu] = useState("home");

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

        {/* KONTAK FULL UPGRADE */}
        {menu === "kontak" && (
          <div style={styles.card}>
            <h2 style={styles.title}>Kontak Kami</h2>

            {/* INFO */}
            <div style={styles.section}>
              <p>📍 <b>Alamat:</b> Jl. Soekarno Hatta No. 550, Bandung</p>
              <p>📞 <b>Telepon:</b> (022) 860 23 000</p>
              <p>✉️ <b>Email:</b> info@edelweiss.id</p>
            </div>

            {/* WHATSAPP */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.waBtn}
            >
              💬 Chat WhatsApp
            </a>

            {/* JAM */}
            <div style={styles.section}>
              <h3>Jam Operasional</h3>
              <p>🕐 IGD: 24 Jam</p>
              <p>🕘 Poli: 08.00 - 20.00 WIB</p>
            </div>

            {/* GOOGLE MAPS */}
            <div style={styles.section}>
              <h3>Lokasi Kami</h3>
              <iframe
                title="maps-edelweis"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31683.0!2d107.6100!3d-6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6a9c1a1a1a1%3A0x123456789abcdef!2sBandung!5e0!3m2!1sen!2sid!4v0000000000000"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "10px" }}
                loading="lazy"
              ></iframe>
            </div>

            {/* FORM SARAN */}
            <div style={styles.section}>
              <h3>Kirim Saran</h3>

              <input
                type="text"
                placeholder="Nama Anda"
                style={styles.input}
              />

              <textarea
                placeholder="Tulis pesan atau saran..."
                rows="4"
                style={styles.textarea}
              />

              <button style={styles.sendBtn}>Kirim</button>
            </div>
          </div>
        )}
      </div>

      <footer style={styles.footer}>© 2026 Edelweis Hospital</footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "#2563eb",
    color: "white",
    padding: "20px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    background: "#1d4ed8",
  },
  btn: {
    padding: "12px 20px",
    border: "none",
    background: "transparent",
    color: "white",
    cursor: "pointer",
  },
  activeBtn: {
    padding: "12px 20px",
    border: "none",
    background: "#1e40af",
    color: "white",
    cursor: "pointer",
  },
  content: {
    padding: "30px",
    flex: 1,
  },
  card: {
    background: "#e0f2fe",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "320px",
    objectFit: "contain",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
  },
  footer: {
    background: "#2563eb",
    color: "white",
    textAlign: "center",
    padding: "15px",
  },
  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  box: {
    borderLeft: "3px solid #0ea5e9",
    paddingLeft: "15px",
  },
  title: {
    marginBottom: "10px",
  },
  section: {
    textAlign: "left",
    marginTop: "15px",
  },

  /* KONTAK STYLE */
  waBtn: {
    display: "inline-block",
    background: "#25D366",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "10px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  sendBtn: {
    marginTop: "10px",
    padding: "10px 15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default App;