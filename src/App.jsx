import { useState } from "react";
import gedung from "./assets/gedung.webp";

function App() {
  const [menu, setMenu] = useState("home");
  const [form, setForm] = useState({
    nama: "",
    email: "",
    pesan: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
    setForm({ nama: "", email: "", pesan: "" });
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
        {menu === "home" && (
          <div style={styles.card}>
            <img src={gedung} alt="Rumah Sakit" style={styles.image} />
            <h2>Selamat Datang di Edelweis Hospital 👋</h2>
            <p>
              Kami hadir sebagai mitra kesehatan terpercaya dengan layanan medis modern,
              fasilitas lengkap, dan tenaga profesional berpengalaman.
            </p>
          </div>
        )}

        {menu === "layanan" && (
          <div style={styles.card}>
            <h2>Layanan Kami</h2>
            <ul style={styles.list}>
              <li>IGD 24 Jam</li>
              <li>Poli Umum & Spesialis</li>
              <li>Laboratorium & Radiologi</li>
              <li>Medical Check Up</li>
            </ul>
          </div>
        )}

        {menu === "kontak" && (
          <div style={styles.card}>
            <h2>Hubungi Kami</h2>

            <p style={{ fontSize: "14px", color: "#555" }}>
              Silakan hubungi kami melalui kontak di bawah atau kirim pesan langsung.
            </p>

            <p>📍 Jl. Soekarno Hatta No. 550, Bandung</p>

            {/* tombol kontak */}
            <div style={styles.contactGrid}>
              <a href="tel:+622286023000" style={styles.contactBtn}>
                📞 Telepon
              </a>

              <a href="mailto:info@edelweiss.id" style={styles.contactBtn}>
                ✉️ Email
              </a>

              <a
                href="https://wa.me/6281998090154"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.waBtn}
              >
                💬 WhatsApp
              </a>
            </div>

            {/* map */}
            <div style={styles.mapContainer}>
              <iframe
                title="Lokasi Edelweis Hospital"
                src="https://www.google.com/maps?q=Edelweiss+Hospital+Bandung&output=embed"
                style={styles.map}
                loading="lazy"
              ></iframe>
            </div> 

            {/* form */}
            <div style={{ marginTop: "25px" }}>
              <h3>Kirim Pesan</h3>

              <form onSubmit={handleSubmit} style={styles.form}>
                <input
                  type="text"
                  name="nama"
                  placeholder="Nama"
                  value={form.nama}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />

                <textarea
                  name="pesan"
                  placeholder="Pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                />

                <button type="submit" style={styles.submitBtn}>
                  Kirim Pesan
                </button>
              </form>
            </div>
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
    padding: "12px",
    border: "none",
    background: "transparent",
    color: "white",
    cursor: "pointer"
  },
  activeBtn: {
    padding: "12px",
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
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "12px"
  },
  list: {
    textAlign: "left"
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "15px"
  },
  contactBtn: {
    textDecoration: "none",
    padding: "12px",
    background: "#2563eb",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center"
  },
  waBtn: {
    textDecoration: "none",
    padding: "12px",
    background: "#25D366",
    color: "white",
    borderRadius: "8px",
    fontWeight: "bold",
    textAlign: "center"
  },
  mapContainer: {
    marginTop: "25px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  },
  map: {
    width: "100%",
    height: "250px",
    border: "0"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    minHeight: "100px"
  },
  submitBtn: {
    padding: "12px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold"
  },
  footer: {
    background: "#2563eb",
    color: "white",
    textAlign: "center",
    padding: "15px"
  }
};

export default App;