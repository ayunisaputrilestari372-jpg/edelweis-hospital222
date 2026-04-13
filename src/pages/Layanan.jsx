import { useEffect, useState } from "react";

export default function Layanan() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://api.mediastack.com/v1/news?access_key=f58cafad7b5a480269c205658e34f021&languages=en&categories=health&limit=5";

  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1580281657527-47c9f39b0c89";

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.data && data.data.length > 0) {
          const fixedData = data.data.map((item) => ({
            ...item,
            imageFinal: item.image || DEFAULT_IMAGE,
          }));

          setNews(fixedData);
          localStorage.setItem("news_cache", JSON.stringify(fixedData));
        } else {
          throw new Error("Data kosong");
        }
      } catch (error) {
        const cache = localStorage.getItem("news_cache");

        if (cache) {
          setNews(JSON.parse(cache));
        } else {
          setNews([]);
        }
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

        <h3 style={styles.subtitle}>Pusat Unggulan</h3>
        <ul>
          <li>Brain Center & Neurosurgery</li>
          <li>Mother & Children Center</li>
          <li>Pain Center</li>
        </ul>

        <h3 style={styles.subtitle}>Layanan Umum</h3>
        <ul>
          <li>IGD 24 Jam</li>
          <li>Poli Rawat Jalan</li>
          <li>Radiologi & Laboratorium</li>
        </ul>

        <h3 style={styles.subtitle}>Paket Layanan</h3>
        <ul>
          <li>Medical Check Up</li>
          <li>Paket Persalinan</li>
          <li>Paket Khitan Anak</li>
        </ul>

        <h3 style={styles.subtitle}>Berita Kesehatan</h3>

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
                <img
                  src={item.imageFinal || DEFAULT_IMAGE}
                  alt="news"
                  style={styles.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = DEFAULT_IMAGE;
                  }}
                />

                <div style={styles.newsContent}>
                  <h4 style={styles.newsTitle}>
                    {item.title || "Judul tidak tersedia"}
                  </h4>

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
    maxWidth: "900px",
    margin: "auto",
    backgroundColor: "#cbd5e1",
    padding: "30px",
    borderRadius: "15px",
  },
  title: {
    textAlign: "center",
    color: "#1e3a8a",
  },
  subtitle: {
    color: "#1e3a8a",
    marginTop: "20px",
  },

  // 🔥 DIUBAH KE BAWAH
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    marginTop: "15px",
  },

  // 🔥 DIUBAH JADI PERSEGI PANJANG
  newsCard: {
    display: "flex",
    width: "100%",
    height: "150px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },

  // 🔥 GAMBAR DI KIRI
  image: {
    width: "250px",
    height: "100%",
    objectFit: "cover",
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