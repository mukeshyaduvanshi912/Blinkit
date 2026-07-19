
require("dotenv").config();

const cors = require("cors");
const app = require("./app");

require("./config/db");

const userRoutes = require("./routes/userRouter");
const productRoutes = require("./routes/productRoutes");
const customerRoutes = require("./routes/customerRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || /^https:\/\/blinkit(-[a-z0-9]+)*\.vercel\.app$/.test(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Stop the process using it or set a different PORT in .env.`
    );
    process.exit(1);
  }

  console.error(error);
});