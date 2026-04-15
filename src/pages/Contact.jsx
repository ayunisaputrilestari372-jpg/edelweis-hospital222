import { useState } from "react";

function App() {
 
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

 
  const handleSubmit = async () => {
    if (!nama || !pesan) {
      alert("Isi dulu nama dan pesan!");
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzLCflZlUnbpDcL2KHHAPazZAkLkwOzProW_sNaqlqDOJKNmb3xCMdHmU6P4lJ6NpjK/exec", {
        method: "POST",
        body: JSON.stringify({ nama, pesan }),
      });

      alert("Pesan berhasil dikirim!");
      setNama("");
      setPesan("");
    } catch (error) {
      alert("Gagal kirim!");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Kontak Edelweis Hospital</h2>

        <div style={styles.section}>
          <p>📍 <b>Alamat:</b> Jl. Soekarno Hatta No. 550, Bandung</p>
          <p>📞 <b>Telepon:</b> (022) 86023000</p>
          <p>✉️ <b>Email:</b> info@edelweishospital.com</p>
        </div>

        {}
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
          <p>🕘 Poli Umum: 08.00 - 20.00 WIB</p>
        </div>

        {}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Edelweis+Hospital+Bandung"
            target="_blank"
            rel="noopener noreferrer"
          >
            📍 Lihat Lokasi
          </a>
        </div>

        {}
        <div style={styles.section}>
          <h3>Kirim Saran & Kritik</h3>

          <input
            type="text"
            placeholder="Nama Anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={styles.input}
          />

          <textarea
            placeholder="Pesan..."
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            style={styles.textarea}
          />

          <button onClick={handleSubmit} style={styles.sendBtn}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: "Arial",
    padding: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
  },
  title: {
    marginBottom: "10px",
  },
  section: {
    marginTop: "15px",
  },
  input: {
    display: "block",
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
  },
  textarea: {
    display: "block",
    marginBottom: "10px",
    padding: "8px",
    width: "100%",
  },
  sendBtn: {
    padding: "10px",
    cursor: "pointer",
  },
  waBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "green",
    color: "white",
    textDecoration: "none",
  },
};

export default App;