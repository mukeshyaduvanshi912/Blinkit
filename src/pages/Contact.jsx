function Contact() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Contact Us</h1>

      <p>Email: support@blinkitclone.com</p>
      <p>Phone: +91 9876543210</p>
      <p>Address: Lucknow, Uttar Pradesh, India</p>

      <form style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Your Name"
          style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
        />
        <br />

        <input
          type="email"
          placeholder="Your Email"
          style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
        />
        <br />

        <textarea
          placeholder="Your Message"
          rows="5"
          style={{ padding: "10px", width: "300px" }}
        ></textarea>

        <br />
        <br />

        <button
          style={{
            padding: "10px 20px",
            background: "green",
            color: "white",
            border: "none",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;