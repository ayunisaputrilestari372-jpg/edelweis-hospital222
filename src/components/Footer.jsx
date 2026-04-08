export default function Footer() {
  const styles = {
    footer: {
      background: "#2563eb",
      color: "white",
      textAlign: "center",
      padding: "15px",
      marginTop: "auto",
    },
    text: {
      margin: 0,
      fontSize: "14px",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2026 Edelweis Hospital</p>
      <p style={styles.text}>Pelayanan Kesehatan Terbaik</p>
    </footer>
  );
}