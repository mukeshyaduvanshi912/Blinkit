import React from "react";
import { Link } from "react-router-dom";

export default function ProductCards({ addToCart }) {
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

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginBottom: "20px" }}>Popular Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {cards.map((card) => (
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
            {/* 👇 Click image OR name to open product detail */}
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

            <div style={{ padding: "15px" }}>
              {/* clickable title */}
              <Link
                to={`/product/${card.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>{card.name}</h3>
              </Link>

              <p style={{ color: "#666", margin: "10px 0" }}>
                {card.description}
              </p>

              <p>
                <strong>{card.quantity}</strong>
              </p>

              <h3 style={{ color: "#00b761" }}>₹{card.amount}</h3>

              <button
                onClick={() => addToCart(card)}
                style={{
                  background: "#00b761",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}