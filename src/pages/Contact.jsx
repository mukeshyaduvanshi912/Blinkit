function Contact() {
  return (
    <div className="page-section">
      <h1>Contact Us</h1>

      <p>Email: support@blinkitclone.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: Lucknow, Uttar Pradesh, India</p>

      <form className="contact-form" style={{ marginTop: "20px" }}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5"></textarea>

        <button
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;