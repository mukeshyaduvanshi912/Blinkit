import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      style={{
        background: "#f7c600",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Blinkit</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/login">Login</Link>

        <button
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "5px",
          }}
        >
          Cart 🛒
        </button>
      </div>
    </div>
  );
}

export default Header;