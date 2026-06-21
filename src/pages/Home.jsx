import { useState, useEffect } from "react";
import Card from "../Components/Card";
import ProductCards from "../Components/ProductCards";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide30.png";

import milk from "../assets/milk.png";
import bread from "../assets/bread.png";
import apple from "../assets/apple.png";
import banana from "../assets/banana.png";
import mango from "../assets/mango.png";
import chips from "../assets/chips.png";
import juice from "../assets/juice.png";
import biscuits from "../assets/biscuits.png";



function Home({ addToCart }) {
  const slides = [slide1, slide2, slide3];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const products = [
    { name: "Milk", price: 50, image: milk },
    { name: "Bread", price: 40, image: bread },
    { name: "Apple", price: 120, image: apple },
    { name: "Banana", price: 60, image: banana },
    { name: "Mango", price: 150, image: mango },
    { name: "Chips", price: 20, image: chips },
    { name: "Juice", price: 80, image: juice },
    { name: "Biscuits", price: 30, image: biscuits },
  ];

  return (
    <>
      {/* Slider */}
      <div>
        <img
          src={slides[currentSlide]}
          alt="Slider"
          style={{
            width: "100%",
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Top Offers */}
      <div style={{ padding: "30px" }}>
        <h2>🔥 Top Offers</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              background: "#ffeb3b",
              padding: "20px",
              borderRadius: "10px",
              flex: 1,
            }}
          >
            <h3>50% OFF</h3>
            <p>On First Order</p>
          </div>

          <div
            style={{
              background: "#4caf50",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              flex: 1,
            }}
          >
            <h3>Free Delivery</h3>
            <p>Above ₹199</p>
          </div>

          <div
            style={{
              background: "#2196f3",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              flex: 1,
            }}
          >
            <h3>Buy 1 Get 1</h3>
            <p>Selected Products</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: "30px" }}>
        <h2>Popular Categories</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div className="category">🥛 Dairy</div>
          <div className="category">🍎 Fruits</div>
          <div className="category">🥦 Vegetables</div>
          <div className="category">🍪 Snacks</div>
          <div className="category">🥤 Drinks</div>
          <div className="category">🍫 Chocolates</div>
        </div>
      </div>

      {/* Popular Products */}
      <ProductCards addToCart={addToCart} />

      {/* Best Sellers */}
      <div style={{ padding: "30px" }}>
        <h2>Best Sellers</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {products.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          padding: "40px",
          background: "#f5f5f5",
          marginTop: "30px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Why Choose Us?</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <div>
            <h3>⚡ Fast Delivery</h3>
            <p>Delivery in 10 minutes.</p>
          </div>

          <div>
            <h3>🥬 Fresh Products</h3>
            <p>Quality guaranteed.</p>
          </div>

          <div>
            <h3>💰 Best Prices</h3>
            <p>Affordable products.</p>
          </div>

          <div>
            <h3>📞 24/7 Support</h3>
            <p>Always ready to help.</p>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div style={{ padding: "30px" }}>
        <h2>Customer Reviews</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>Excellent delivery service.</p>
            <h4>- Mukesh</h4>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              width: "300px",
            }}
          >
            ⭐⭐⭐⭐⭐
            <p>Fresh fruits every time.</p>
            <h4>- Rahul</h4>
          </div>
        </div>
      </div>

      {/* Offer Banner */}
      <div
        style={{
          background: "#f7c600",
          margin: "30px",
          borderRadius: "10px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h2>🎉 Flat 50% OFF</h2>
        <p>Use Code: BLINK50</p>
      </div>

      {/* Download App */}
      <div
        style={{
          background: "#00b761",
          color: "white",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h2>Download Blinkit App</h2>
        <p>Available on Android and iOS</p>

        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Play Store
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          App Store
        </button>
      </div>
    </>
  );
}

export default Home;