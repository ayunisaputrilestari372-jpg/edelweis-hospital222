import { useEffect, useState } from "react";

export default function Layanan() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL =
    "https://api.mediastack.com/v1/news?access_key=f58cafad7b5a480269c205658e34f021&languages=en&categories=health&limit=5";

  // 🔥 GAMBAR DEFAULT (kalau error)
  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1580281657527-47c9f39b0c89";

  // 🔥 GAMBAR FIX (STABIL & KONSISTEN)
  const FIXED_IMAGES = [
    "https://images.unsplash.com/photo-1588776814546-ec7e7e2f4d9b",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    "https://images.unsplash.com/photo-1580281657527-47c9f39b0c89",
    "https://images.unsplash.com/photo-1584515933487-779824d29309",
    "https://images.unsplash.com/photo-1581595219315-a187dd40c322"
  ];

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.data && data.data.length > 0) {
          // 🔥 FIX: gabungkan berita + gambar tetap
          const fixedData = data.data.map((item, index) => ({
            ...item,
            imageFinal: FIXED_IMAGES[index % FIXED_IMAGES.length],
          }));

          setNews(fixedData);

          // 🔥 simpan cache
          localStorage.setItem("news_cache", JSON.stringify(fixedData));
        } else {
          throw new Error("Data kosong");
        }
      } catch (error) {
        // 🔥 ambil dari cache kalau API gagal
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
                {/* 🔥 GAMBAR FIX (TIDAK AKAN HILANG) */}
                <img
                  src={item.imageFinal}
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
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "15px",
    justifyContent: "center",
  },
  newsCard: {
    width: "250px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "160px",
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