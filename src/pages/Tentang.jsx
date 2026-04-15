import { useEffect, useState } from "react";
import gedung from "../assets/gedung.webp";

function Tentang() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200); // animasi muncul
  }, []);

  return (
    <div style={styles.container}>
      
      {/* ✅ HERO IMAGE */}
      <div style={styles.hero}>
        <img src={gedung} alt="Edelweiss Hospital" style={styles.image} />
        <div style={styles.overlay}>
          <h1 style={styles.heroText}>Edelweiss Hospital</h1>
          <p style={styles.heroSub}>Pelayanan Kesehatan Modern & Terpercaya</p>
        </div>
      </div>

      {/* ✅ DESKRIPSI */}
      <div style={{ ...styles.section, opacity: show ? 1 : 0 }}>
        <h2>Tentang Kami</h2>
        <p>
          Edelweiss Hospital merupakan rumah sakit modern yang berkomitmen untuk memberikan pelayanan kesehatan terbaik, profesional, dan terpercaya kepada masyarakat. Dengan didukung oleh tenaga medis yang berpengalaman serta fasilitas kesehatan yang lengkap dan berteknologi tinggi, Edelweiss Hospital hadir sebagai solusi bagi berbagai kebutuhan layanan kesehatan, mulai dari pemeriksaan umum hingga penanganan medis yang lebih kompleks.
        </p>
      </div>

      {/* ✅ DOKTER */}
      <div style={{ ...styles.section, opacity: show ? 1 : 0 }}>
        <h2>Dokter Kami</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Dr. Andi Wijaya</h3>
            <p>Spesialis Penyakit Dalam</p>
          </div>

          <div style={styles.card}>
            <h3>Dr. Siti Rahma</h3>
            <p>Dokter Umum</p>
          </div>

          <div style={styles.card}>
            <h3>Dr. Budi Santoso</h3>
            <p>Spesialis Anak</p>
          </div>
        </div>
      </div>

      {/* ✅ LAYANAN */}
      <div style={{ ...styles.section, opacity: show ? 1 : 0 }}>
        <h2>Layanan Unggulan</h2>

        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>IGD 24 Jam</h3>
            <p>Siap melayani kondisi darurat kapan saja</p>
          </div>

          <div style={styles.card}>
            <h3>Rawat Inap</h3>
            <p>Fasilitas nyaman dan modern</p>
          </div>

          <div style={styles.card}>
            <h3>Laboratorium</h3>
            <p>Pemeriksaan cepat & akurat</p>
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
  },

  hero: {
    position: "relative",
    marginBottom: "30px",
  },

  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },

  heroText: {
    fontSize: "32px",
    margin: 0,
  },

  heroSub: {
    fontSize: "16px",
  },

  section: {
    marginBottom: "30px",
    transition: "0.8s",
  },

  cardContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  card: {
    flex: "1 1 200px",
    padding: "15px",
    borderRadius: "10px",
    background: "#f1f5f9",
    transition: "0.3s",
    cursor: "pointer",
  },
};

export default Tentang;