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
        <button onClick={() => setMenu("home")} style={menu === "home" ? styles.activeBtn : styles.btn}>
          Home
        </button>
        <button onClick={() => setMenu("layanan")} style={menu === "layanan" ? styles.activeBtn : styles.btn}>
          Layanan
        </button>
        <button onClick={() => setMenu("kontak")} style={menu === "kontak" ? styles.activeBtn : styles.btn}>
          Kontak
        </button>
      </nav>

      <div style={styles.content}>
        {menu === "home" && (
          <div style={styles.card}>
            <img src={gedung} alt="Rumah Sakit" style={styles.image} />
            <h2>Selamat Datang di Edelweis Hospital 👋</h2>
            <p>
              Kami hadir sebagai mitra kesehatan terpercaya dengan layanan medis modern,
              fasilitas lengkap, dan tenaga profesional berpengalaman.
            </p>
            <p>
              Memberikan pelayanan terbaik dengan kepedulian, kenyamanan,
              dan keamanan bagi setiap pasien.
            </p>
          </div>
        )}

        {menu === "layanan" && (
          <div style={styles.card}>
            <h2>Layanan Kami</h2>

            <h3>Pusat Unggulan (Center of Excellence)</h3>
            <ul style={styles.list}>
              <li><b>Brain Center & Neurosurgery</b>: CT-Scan, operasi saraf, Endoscopic Spine Laminectomy</li>
              <li><b>Mother and Children Center</b>: Spesialis anak, kandungan, tumbuh kembang, laktasi, laparoskopi ginekologi</li>
              <li><b>Pain Center</b>: Penanganan nyeri akut dan kronis</li>
              <li><b>Wellness & Aesthetic Center</b>: Perawatan kulit dan tubuh holistik</li>
              <li><b>Golden Senior Care</b>: Layanan kesehatan lansia</li>
              <li><b>Stem Cell & Regenerative Therapy</b>: Regenerasi jaringan untuk penyakit kronis</li>
            </ul>

            <h3>Layanan Medis Umum & Penunjang</h3>
            <ul style={styles.list}>
              <li>IGD 24 Jam & Poli Rawat Jalan (Senin–Sabtu 08.00–20.00 WIB)</li>
              <li>Hemodialisis & CAPD</li>
              <li>Radiologi, Laboratorium, dan Rehabilitasi Medis</li>
            </ul>

            <h3>Paket Layanan</h3>
            <ul style={styles.list}>
              <li>Paket Medical Check Up (MCU)</li>
              <li>Paket Persalinan (SC, Normal, ILA)</li>
              <li>Paket Khitan Anak</li>
            </ul>
          </div>
        )}

        {menu === "kontak" && (
          <div style={styles.card}>
            <h2>Kontak</h2>
            <p>📍 Jl. Soekarno Hatta No. 550, Bandung</p>
            <p>📞 (022) 860 23 000</p>
            <p>✉️ info@edelweiss.id</p>
          </div>
        )}
      </div>

      <footer style={styles.footer}>
        © 2026 Edelweis Hospital
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    background: "#f4f6f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  header: {
    background: "#2563eb",
    color: "white",
    padding: "20px",
    textAlign: "center"
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    background: "#1d4ed8"
  },
  btn: {
    padding: "12px 20px",
    border: "none",
    background: "transparent",
    color: "white",
    cursor: "pointer"
  },
  activeBtn: {
    padding: "12px 20px",
    border: "none",
    background: "#1e40af",
    color: "white",
    cursor: "pointer"
  },
  content: {
    padding: "30px",
    flex: 1
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "20px"
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px"
  },
  footer: {
    background: "#2563eb",
    color: "white",
    textAlign: "center",
    padding: "15px"
  }
};

export default App;