import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

// 🔥 IMPORT GAMBAR
import kamar1 from "../assets/kamar1.jpg";
import kamar2 from "../assets/kamar2.jpg";
import kamar3 from "../assets/kamar3.jpg";
import kamar4 from "../assets/kamar4.jpg";
import kamar5 from "../assets/kamar5.jpg";
import kamar6 from "../assets/kamar6.jpg";

export default function Layanan() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const API_URL =
    "https://api.mediastack.com/v1/news?access_key=f58cafad7b5a480269c205658e34f021&languages=en&categories=health&limit=5";

  const DEFAULT_IMAGE = logo;

  const kamarList = [
    { name: "ORCHID", price: "Rp 1.800.000", img: kamar1, desc: "VIP Room lengkap" },
    { name: "ALAMANDA", price: "Rp 1.600.000", img: kamar2, desc: "AC, TV, KM dalam" },
    { name: "LAVENDER", price: "Rp 1.600.000", img: kamar3, desc: "AC, Sofa nyaman" },
    { name: "LILY", price: "Rp 1.250.000", img: kamar4, desc: "Bed elektrik" },
    { name: "SAKURA", price: "Rp 650.000", img: kamar5, desc: "Kelas 3 standar" },
    { name: "JASMINE", price: "Rp 450.000", img: kamar6, desc: "Nyaman & bersih" },
  ];

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.data && data.data.length > 0) {
          const fixedData = data.data.map((item) => ({
            ...item,
            imageFinal: item.image ? item.image : DEFAULT_IMAGE,
          }));

          setNews(fixedData);
          localStorage.setItem("news_cache", JSON.stringify(fixedData));
        } else {
          throw new Error("Data kosong");
        }
      } catch (error) {
        const cache = localStorage.getItem("news_cache");
        setNews(cache ? JSON.parse(cache) : []);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Layanan Kami</h2>

        {/* 🔥 3 CARD */}
        <div style={styles.row}>
          <div style={styles.infoCard}>
            <h3>Pusat Unggulan</h3>
            <ul>
              <li>Brain Center</li>
              <li>Mother & Child</li>
              <li>Pain Center</li>
            </ul>
          </div>

          <div style={styles.infoCard}>
            <h3>Layanan Umum</h3>
            <ul>
              <li>IGD 24 Jam</li>
              <li>Rawat Jalan</li>
              <li>Radiologi</li>
            </ul>
          </div>

          <div style={styles.infoCard}>
            <h3>Paket Layanan</h3>
            <ul>
              <li>Medical Check Up</li>
              <li>Persalinan</li>
              <li>Khitan Anak</li>
            </ul>
          </div>
        </div>

        {/* 🔥 KAMAR */}
        <h3 style={styles.subtitle}>Kamar Rumah Sakit</h3>

        <div style={styles.roomGrid}>
          {kamarList.map((item, index) => (
            <div
              key={index}
              style={styles.roomCard}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector(".overlay").style.opacity = 1;
                e.currentTarget.querySelector(".bottom").style.opacity = 0;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector(".overlay").style.opacity = 0;
                e.currentTarget.querySelector(".bottom").style.opacity = 1;
              }}
            >
              <img src={item.img} style={styles.roomImage} />

              {/* 🔥 NAMA + HARGA */}
              <div className="bottom" style={styles.bottomInfo}>
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>

              {/* 🔥 OVERLAY */}
              <div className="overlay" style={styles.overlay}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <h3>{item.price}</h3>

                <button
                  style={styles.button}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRoom(item);
                  }}
                >
                  Lihat selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 MODAL (HANYA GAMBAR) */}
        {selectedRoom && (
          <div style={styles.modal} onClick={() => setSelectedRoom(null)}>
            <img src={selectedRoom.img} style={styles.modalImage} />
          </div>
        )}

        {/* 🔥 BERITA (TIDAK DIUBAH) */}
        <h3 style={styles.subtitle}>Berita Terkini</h3>

        {loading ? (
          <p style={{ textAlign: "center" }}>Loading berita...</p>
        ) : news.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            Berita tidak tersedia 😢
          </p>
        ) : (
          <div style={styles.grid}>
            {news.map((item, index) => (
              <div
                key={index}
                style={styles.newsCard}
                onClick={() => window.open(item.url, "_blank")}
              >
                <img src={item.imageFinal} style={styles.image} />
                <div style={styles.newsContent}>
                  <h4 style={styles.newsTitle}>{item.title}</h4>
                  <p style={styles.newsDesc}>
                    {item.description
                      ? item.description.slice(0, 80) + "..."
                      : "Tidak ada deskripsi"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#e5e7eb",
    minHeight: "100vh",
    padding: "30px",
  },
  card: {
    maxWidth: "1100px",
    margin: "auto",
    backgroundColor: "#cbd5e1",
    padding: "30px",
    borderRadius: "15px",
  },
  title: {
    textAlign: "center",
    color: "#1e3a8a",
  },

  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "30px",
  },
  infoCard: {
    flex: 1,
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
  },

  subtitle: {
    color: "#1e3a8a",
    marginTop: "20px",
  },

  // 🔥 GRID FIX 3 KOLOM
  roomGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
  },

  // 🔥 CARD RAPIH
  roomCard: {
    position: "relative",
    width: "100%",
    aspectRatio: "4 / 3",
    borderRadius: "12px",
    overflow: "hidden",
  },

  roomImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  bottomInfo: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    transition: "0.3s",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.85)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0,
    transition: "0.3s",
    textAlign: "center",
    padding: "15px",
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "20px",
    border: "none",
    background: "#fff",
    color: "#1e3a8a",
    cursor: "pointer",
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    maxWidth: "80%",
    borderRadius: "10px",
  },

  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "15px",
  },
  newsCard: {
    display: "flex",
    height: "150px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
  },
  image: {
    width: "250px",
    objectFit: "contain",
  },
  newsContent: {
    padding: "10px",
  },
  newsTitle: {
    fontSize: "14px",
    color: "#1e3a8a",
  },
  newsDesc: {
    fontSize: "12px",
    color: "#555",
  },
};