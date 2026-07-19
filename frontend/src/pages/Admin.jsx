import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="admin-container">
      <h1 className="admin-title">🛠 Admin Dashboard</h1>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>50</h3>
          <p>Total Products</p>
        </div>

        <div className="stat-box">
          <h3>120</h3>
          <p>Total Users</p>
        </div>

        <div className="stat-box">
          <h3>35</h3>
          <p>Total Orders</p>
        </div>

        <div className="stat-box">
          <h3>₹25K</h3>
          <p>Total Revenue</p>
        </div>
      </div>

      <div className="admin-grid">
        <div className="admin-card">
          <h2>Products</h2>
          <p>Add and manage products</p>

          <Link to="/add-product">
            <button className="admin-btn">
              Manage Products
            </button>
          </Link>
        </div>

        <div className="admin-card">
          <h2>Users</h2>
          <p>View registered users</p>

          <Link to="/users">
            <button className="admin-btn">
              View Users
            </button>
          </Link>
        </div>

        <div className="admin-card">
          <h2>Cart</h2>
          <p>View cart items</p>

          <Link to="/cart">
            <button className="admin-btn">
              Open Cart
            </button>
          </Link>
        </div>

        <div className="admin-card">
          <h2>Orders</h2>
          <p>Manage customer orders</p>

          <button className="admin-btn">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;