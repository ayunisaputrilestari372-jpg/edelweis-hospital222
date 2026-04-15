import { useState } from "react";

export default function Navbar({ menu, setMenu }) {
  const [open, setOpen] = useState(false);

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#1d4ed8",
      padding: "10px",
      gap: "10px",
    },
    btn: {
      padding: "10px 20px",
      border: "none",
      background: "transparent",
      color: "white",
      cursor: "pointer",
      borderRadius: "8px",
      transition: "0.3s",
    },
    activeBtn: {
      padding: "10px 20px",
      border: "none",
      background: "#1e40af",
      color: "white",
      cursor: "pointer",
      borderRadius: "8px",
      fontWeight: "bold",
    },

    // ✅ dropdown
    dropdown: {
      position: "relative",
      paddingBottom: "5px", // 🔥 biar ga hilang saat geser
    },
    dropdownMenu: {
      position: "absolute",
      top: "100%", // 🔥 nempel ke tombol
      left: 0,
      background: "white",
      borderRadius: "8px",
      overflow: "hidden",
      minWidth: "150px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)", // opsional biar keren
    },
    dropdownItem: {
      padding: "10px",
      cursor: "pointer",
      color: "black",
    },
  };

  return (
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

      {/* ✅ CONTACT DROPDOWN */}
      <div
        style={styles.dropdown}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          style={
            menu === "contact" || menu === "tentang"
              ? styles.activeBtn
              : styles.btn
          }
        >
          Contact
        </button>

        {open && (
          <div style={styles.dropdownMenu}>
            <div
              style={styles.dropdownItem}
              onClick={() => {
                setMenu("contact");
                setOpen(false);
              }}
            >
              Contact
            </div>

            <div
              style={styles.dropdownItem}
              onClick={() => {
                setMenu("tentang");
                setOpen(false);
              }}
            >
              Tentang Kami
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}