export default function Navbar({ menu, setMenu }) {
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
  };

  return (
    <nav style={styles.nav}>
      <button onClick={() => setMenu("home")} style={menu === "home" ? styles.activeBtn : styles.btn}>
        Home
      </button>

      <button onClick={() => setMenu("layanan")} style={menu === "layanan" ? styles.activeBtn : styles.btn}>
        Layanan
      </button>

      <button onClick={() => setMenu("contact")} style={menu === "contact" ? styles.activeBtn : styles.btn}>
        Contact
      </button>
    </nav>
  );
}