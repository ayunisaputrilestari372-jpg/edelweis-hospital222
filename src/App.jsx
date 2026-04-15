import { useState } from "react";
import Home from "./pages/Home.jsx";
import Layanan from "./pages/Layanan.jsx";
import Contact from "./pages/Contact.jsx";
import Tentang from "./pages/Tentang.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [menu, setMenu] = useState("home");

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      <header style={{ background: "#2563eb", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Edelweis Hospital</h1>
        <p>Pelayanan Kesehatan Terbaik</p>
      </header>

      <Navbar menu={menu} setMenu={setMenu} />

      <div style={{ padding: "30px", flex: 1 }}>
        {menu === "home" && <Home />}
        {menu === "layanan" && <Layanan />}
        {menu === "contact" && <Contact />}
        {menu === "tentang" && <Tentang />}
      </div>

      <Footer />
    </div>
  );
}

export default App;