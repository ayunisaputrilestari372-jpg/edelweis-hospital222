import { useState } from "react";
import gedung from "../assets/gedung.webp";
import { FaUserMd, FaHospital, FaShieldAlt, FaHeart } from "react-icons/fa";
export default function Home() {
  const [berat, setBerat] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [umur, setUmur] = useState("");
  const [gender, setGender] = useState("pria");
  const [hasil, setHasil] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [animate, setAnimate] = useState(false);

  const getBodyScale = () => {
    if (!hasil) return 1;
    if (hasil.kategori === "Kurus") return 0.8;
    if (hasil.kategori === "Normal") return 1;
    if (hasil.kategori === "Gemuk") return 1.2;
    return 1.4;
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f9fbfd",
        borderRadius: "12px",
      }}
    >
      {/* HERO */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${gedung})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "88%",
            width: "45%",
            background: "rgba(0, 70, 140, 0.6)",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            display: "flex",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <div style={{ color: "#fff" }}>
            <h2 style={{ marginBottom: "10px", fontSize: "28px" }}>
              Edelweis Hospital
            </h2>

            <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
              Edelweis Hospital hadir sebagai rumah sakit modern yang
              berkomitmen memberikan pelayanan kesehatan terbaik kepada
              masyarakat. Dengan didukung oleh tenaga medis profesional,
              fasilitas lengkap, serta teknologi terkini.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#0077cc",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        {[
          { 
            icon: "🩺", 
            title: "Tenaga Medis Profesional & Empatik", 
            desc: "Dokter dan tenaga medis kami tak hanya ahli, tapi juga hadir dengan empati dan kepedulian yang tulus." 
          },
          { 
            icon: "🏥", 
            title: "Layanan Terpadu yang Memudahkan", 
            desc: "Seluruh proses layanan kami terintegrasi untuk mempermudah pasien dalam setiap tahap perawatan." 
          },
          { 
            icon: "🤝", 
            title: "Pelayanan Bernilai Amanah", 
            desc: "Kami memberikan pelayanan medis dengan nilai amanah — jujur, peduli, dan bertanggung jawab terhadap setiap pasien." 
          },
          { 
            icon: "💖", 
            title: "Rasa Nyaman yang Menenangkan", 
            desc: "Suasana hangat dan ramah keluarga di Edelweiss Hospital membantu pasien merasa lebih tenang selama proses penyembuhan." 
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "#f0f7ff",
              padding: "18px",
              borderRadius: "10px",
              textAlign: "center",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 6px 15px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "22px" }}>{item.icon}</div>
            <h3 style={{ color: "#0077cc", margin: "8px 0 4px", fontSize: "16px" }}>
              {item.title}
            </h3>
            <p style={{ color: "#555", fontSize: "14px", lineHeight: "1.5" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background:  "#f0f7ff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#0077cc" }}>Misi</h3>
          <ul style={{ paddingLeft: "20px", color: "#444", lineHeight: "1.6" }}>
            <li>
              Memberikan pengalaman terbaik dalam pelayanan dan keselamatan
              pasien, dengan penuh kasih sayang serta terpercaya sesuai dengan
              kebutuhan setiap pasien
            </li>
            <li>
              Mempersiapkan insan perumahsakitan yang unggul, profesional dan
              berorientasi pada pelayanan terbaik kepada pasien
            </li>
            <li>
              Memberikan layanan kesehatan terbaik untuk masyarakat berbasis
              riset, data, dan fakta
            </li>
          </ul>
        </div>

        <div
          style={{
            background:  "#f0f7ff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#0077cc" }}>Visi</h3>
          <p style={{ color: "#444", lineHeight: "1.6" }}>
            Menjadi pilihan utama sebagai penyedia layanan kesehatan
            terintegrasi, yang berfokus pada pelayanan berkualitas.
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "40px",
          background: "#f0f7ff",
          padding: "25px",
          borderRadius: "12px",
          color: "#0077cc",
        }}
      >
        <h2>Kalkulator BMI</h2>

        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <button
            onClick={() => setGender("pria")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              background: gender === "pria" ? "#2563eb" : "#ddd",
              color: gender === "pria" ? "#fff" : "#000",
            }}
          >
            ♂ Pria
          </button>
          <button
            onClick={() => setGender("wanita")}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              background: gender === "wanita" ? "#ec4899" : "#ddd",
              color: gender === "wanita" ? "#fff" : "#000",
            }}
          >
            ♀ Wanita
          </button>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="number"
            placeholder="Umur"
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
            style={{ flex: 1, padding: "10px", borderRadius: "8px" }}
          />
          <input
            type="number"
            placeholder="Berat (kg)"
            value={berat}
            onChange={(e) => setBerat(e.target.value)}
            style={{ flex: 1, padding: "10px", borderRadius: "8px" }}
          />
          <input
            type="number"
            placeholder="Tinggi (cm)"
            value={tinggi}
            onChange={(e) => setTinggi(e.target.value)}
            style={{ flex: 1, padding: "10px", borderRadius: "8px" }}
          />
        </div>

        <button
          onClick={() => {
            const t = tinggi / 100;
            const bmi = berat / (t * t);

            let kategori = "";
            let rekomendasi = "";

            if (bmi < 18.5) {
              kategori = "Kurus";
              rekomendasi = "Perbanyak asupan nutrisi dan konsultasi dengan dokter.";
            } else if (bmi < 25) {
              kategori = "Normal";
              rekomendasi = "Pertahankan pola makan sehat dan olahraga rutin.";
            } else if (bmi < 30) {
              kategori = "Gemuk";
              rekomendasi = "Atur pola makan dan tingkatkan aktivitas fisik.";
            } else {
              kategori = "Obesitas";
              rekomendasi = "Disarankan konsultasi dengan tenaga medis.";
            }

            setHasil({
              nilai: bmi.toFixed(1),
              kategori,
              rekomendasi,
            });

            setShowPopup(true);
            setTimeout(() => setAnimate(true), 10);
          }}
          style={{
            marginTop: "15px",
            padding: "12px",
            width: "100%",
            background:"#0077cc",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Hitung Indeks Massa Tubuh
        </button>
      </div>

      {/* POPUP BESAR */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: animate ? "rgba(0,0,0,0.5)" : "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "35px",
              borderRadius: "16px",
              width: "420px",
              textAlign: "center",
              transform: animate ? "scale(1)" : "scale(0.7)",
              opacity: animate ? 1 : 0,
              transition: "0.3s",
            }}
          >
            {/* SVG */}
            <div style={{ marginBottom: "20px" }}>
              <svg width="140" height="200">
                <circle cx="70" cy="35" r="18" fill="#f2c9a0" />
                <g
                  style={{
                    transform: `scaleX(${getBodyScale()})`,
                    transformOrigin: "center",
                    transition: "0.4s",
                  }}
                >
                  <rect x="45" y="55" width="50" height="70" rx="25" fill="#60a5fa" />
                </g>
                <line x1="60" y1="125" x2="55" y2="180" stroke="#333" strokeWidth="6" />
                <line x1="80" y1="125" x2="85" y2="180" stroke="#333" strokeWidth="6" />
              </svg>
            </div>

            <h2>Hasil BMI</h2>

            <p style={{ fontSize: "32px", fontWeight: "bold" }}>
              {hasil?.nilai}
            </p>

            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              {hasil?.kategori}
            </p>

            <p style={{ fontSize: "14px", marginTop: "10px" }}>
              {hasil?.rekomendasi}
            </p>

            <button
              onClick={() => {
                setAnimate(false);
                setTimeout(() => setShowPopup(false), 200);
              }}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "12px",
                background: "#0ea5c6",
                color: "#fff",
                borderRadius: "8px",
              }}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}