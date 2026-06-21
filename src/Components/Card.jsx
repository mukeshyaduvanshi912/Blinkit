function Card({ image, name, price, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "10px",
        width: "180px",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />

      <h3>{name}</h3>
      <p>₹{price}</p>

      {/* ADD TO CART BUTTON */}
      <button
        onClick={() => addToCart({ name, price, image })}
        style={{
          padding: "8px 12px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;