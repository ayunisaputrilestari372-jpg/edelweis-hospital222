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
                Edelweis Hospital hadir sebagai rumah sakit modern yang
                berkomitmen memberikan pelayanan kesehatan terbaik kepada
                masyarakat. Dengan didukung oleh tenaga medis profesional,
                fasilitas lengkap, serta teknologi terkini.
              </p>
            </div>

            <div style={styles.grid2}>
              <div style={styles.box}>
                <h3>Misi</h3>
                <ul style={styles.list}>
                  <li>
                    Memberikan pelayanan terbaik dengan penuh kasih sayang dan
                    profesional
                  </li>
                  <li>
                    Menjadi tenaga kesehatan yang unggul dan berorientasi
                    pasien
                  </li>
                  <li>
                    Layanan berbasis riset, data, dan teknologi modern
                  </li>
                </ul>
              </div>

              <div style={styles.box}>
                <h3>Visi</h3>
                <p>
                  Menjadi rumah sakit pilihan utama dengan pelayanan
                  kesehatan terintegrasi dan berkualitas tinggi.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LAYANAN */}
        {menu === "layanan" && (
          <div style={styles.card}>
            <h2 style={styles.title}>Layanan Kami</h2>

            <div style={styles.section}>
              <h3>Pusat Unggulan</h3>
              <ul style={styles.list}>
                <li>Brain Center & Neurosurgery</li>
                <li>Mother and Children Center</li>
                <li>Pain Center</li>
                <li>Wellness & Aesthetic</li>
                <li>Golden Senior Care</li>
                <li>Stem Cell Therapy</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3>Layanan Medis Umum</h3>
              <ul style={styles.list}>
                <li>IGD 24 Jam & Poli Rawat Jalan</li>
                <li>Hemodialisis & CAPD</li>
                <li>Radiologi, Lab & Rehabilitasi</li>
              </ul>
            </div>

            <div style={styles.section}>
              <h3>Paket Layanan</h3>
              <ul style={styles.list}>
                <li>Medical Check Up</li>
                <li>Paket Persalinan</li>
                <li>Paket Khitan Anak</li>
              </ul>
            </div>
          </div>
        )}

        {/* KONTAK (SUDAH DIUPDATE) */}
        {menu === "kontak" && (
          <div style={styles.card}>
            <h2 style={styles.title}>Kontak Kami</h2>

            <div style={styles.section}>
              <p>📍 <b>Alamat:</b> Jl. Soekarno Hatta No. 550, Bandung</p>
              <p>📞 <b>Telepon:</b> (022) 860 23 000</p>
              <p>📱 <b>WhatsApp:</b> 0812-3456-7890</p>
              <p>✉️ <b>Email:</b> info@edelweiss.id</p>
            </div>

            <div style={styles.section}>
              <h3>Jam Operasional</h3>
              <p>🕐 IGD: 24 Jam</p>
              <p>🕘 Poli: 08.00 - 20.00 WIB</p>
            </div>

            <div style={styles.section}>
              <h3>Informasi</h3>
              <p>
                Kami siap melayani Anda dengan tenaga medis profesional dan
                fasilitas lengkap setiap hari.
              </p>
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
};

export default App;