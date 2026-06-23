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
  const [searchText, setSearchText] = useState('');

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
      {/* Location + Search */}
      <section className="page-section home-top" style={{ justifyContent: 'space-between' }}>
        <div>
          <p style={{ margin: 0, color: '#4caf50', fontWeight: 700 }}>Delivery location</p>
          <h1 style={{ margin: '10px 0 0', fontSize: '1.75rem' }}>Lucknow, Uttar Pradesh</h1>
        </div>

        <div style={{ flex: '1 1 320px', maxWidth: '500px' }}>
          <input
            type="search"
            placeholder="Search products, categories or brands"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            style={{
              width: '100%',
              padding: '14px 18px',
              borderRadius: '12px',
              border: '1px solid #ddd',
              fontSize: '1rem',
            }}
          />
        </div>
      </section>

      {/* Slider */}
      <section className="slider">
        <img
          src={slides[currentSlide]}
          alt="Slider"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </section>

      {/* Top Offers */}
      <section className="page-section">
        <h2>🔥 Top Offers</h2>

        <div className="offer-grid" style={{ marginTop: '14px' }}>
          <div className="offer-box offer-yellow">
            <h3>50% OFF</h3>
            <p>On First Order</p>
          </div>

          <div className="offer-box offer-green">
            <h3>Free Delivery</h3>
            <p>Above ₹199</p>
          </div>

          <div className="offer-box offer-blue">
            <h3>Buy 1 Get 1</h3>
            <p>Selected Products</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="page-section">
        <h2>Popular Categories</h2>

        <div className="category-grid" style={{ marginTop: '14px' }}>
          <div className="category">🥛 Dairy</div>
          <div className="category">🍎 Fruits</div>
          <div className="category">🥦 Vegetables</div>
          <div className="category">🍪 Snacks</div>
          <div className="category">🥤 Drinks</div>
          <div className="category">🍫 Chocolates</div>
        </div>
      </section>

      {/* Popular Products */}
      <ProductCards addToCart={addToCart} searchText={searchText} />

      {/* Best Sellers */}
      <section className="page-section">
        <h2>Best Sellers</h2>

        <div className="best-seller-grid" style={{ marginTop: '14px', justifyContent: 'center' }}>
          {products
            .filter((item) =>
              item.name.toLowerCase().includes(searchText.toLowerCase()) ||
              item.price.toString().includes(searchText)
            )
            .map((item, index) => (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                addToCart={addToCart}
              />
            ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="page-section" style={{ background: '#f5f5f5', marginTop: '16px' }}>
        <h2 style={{ textAlign: 'center' }}>Why Choose Us?</h2>

        <div className="feature-grid" style={{ justifyContent: 'space-around', marginTop: '16px' }}>
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
      </section>

      {/* Customer Reviews */}
      <section className="page-section">
        <h2>Customer Reviews</h2>

        <div className="reviews-grid" style={{ marginTop: '14px' }}>
          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>Excellent delivery service.</p>
            <h4>- Mukesh</h4>
          </div>

          <div className="review-card">
            ⭐⭐⭐⭐⭐
            <p>Fresh fruits every time.</p>
            <h4>- Rahul</h4>
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="offer-banner">
        <h2>🎉 Flat 50% OFF</h2>
        <p>Use Code: BLINK50</p>
      </section>

      {/* Download App */}
      <section className="download-app">
        <h2>Download Blinkit App</h2>
        <p>Available on Android and iOS</p>

        <div className="download-button-group">
          <button
            style={{
              padding: '10px 18px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              minWidth: '130px',
            }}
          >
            Play Store
          </button>

          <button
            style={{
              padding: '10px 18px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              minWidth: '130px',
            }}
          >
            App Store
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;