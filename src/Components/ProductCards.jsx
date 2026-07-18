import React from "react";
import { Link } from "react-router-dom";

export default function ProductCards({ addToCart, searchText = '' }) {
  const [counters, setCounters] = React.useState({});
  const cards = [
    {
      id: 1,
      name: "Premium Apple",
      description: "Fresh and juicy apples picked from trusted farms.",
      amount: 120,
      quantity: "1 kg",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 2,
      name: "Organic Banana",
      description: "Naturally sweet bananas, perfect for daily nutrition.",
      amount: 60,
      quantity: "1 dozen",
      image:
        "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 3,
      name: "Fresh Orange",
      description: "Vitamin-rich oranges with bright citrus flavor.",
      amount: 90,
      quantity: "1 kg",
      image:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=700&q=80",
    },
    {
      id: 4,
      name: "Green Grapes",
      description: "Crisp seedless grapes for snacks, juices, and salads.",
      amount: 140,
      quantity: "500 g",
      image:
        "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=700&q=80",
    },
  ];

  const increment = (id) => {
    setCounters((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setCounters((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  return (
    <div className="page-section product-section">
      <h2 style={{ marginBottom: "16px" }}>Popular Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        {cards
          .filter((card) =>
            card.name.toLowerCase().includes(searchText.toLowerCase()) ||
            card.description.toLowerCase().includes(searchText.toLowerCase()) ||
            card.quantity.toLowerCase().includes(searchText.toLowerCase()) ||
            card.amount.toString().includes(searchText)
          )
          .map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Link to={`/product/${card.id}`}>
              <img
                src={card.image}
                alt={card.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
            </Link>

            <div style={{ padding: "14px" }}>
              <Link
                to={`/product/${card.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>{card.name}</h3>
              </Link>

              <p style={{ color: "#666", margin: "8px 0" }}>{card.description}</p>

              <p>
                <strong>{card.quantity}</strong>
              </p>

              <h3 style={{ color: "#00b761" }}>₹{card.amount}</h3>

              <div style={{ display: "grid", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button
                    type="button"
                    onClick={() => decrement(card.id)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                  <span style={{ minWidth: "32px", textAlign: "center", fontWeight: 600 }}>
                    {counters[card.id] || 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => increment(card.id)}
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => addToCart(card, counters[card.id] || 1)}
                  style={{
                    background: "#00b761",
                    color: "#fff",
                    border: "none",
                    padding: "10px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
