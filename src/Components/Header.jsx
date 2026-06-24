import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar">
      <h2>Blinkit</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        <Link to="/about">About Us</Link>

        <Link to="/contact">Contact Us</Link>

        <Link to="/login">Login</Link>

        <Link to="/register">Register</Link>

        <Link to="/admin">Admin</Link>

        <Link to="/add-product">Add Product</Link>

        <Link to="/users">Users</Link>

        <Link to="/cart" className="cart-link">
          Cart 🛒
        </Link>
      </div>
    </div>
  );
}

export default Header;