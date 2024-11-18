const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// UI Routes
app.use("/", require("./routes/ui/home"));
app.use("/auth", require("./routes/ui/auth"));
app.use("/explore", require("./routes/ui/explore"));
app.use("/nft", require("./routes/ui/nft"));
app.use("/contact", require("./routes/ui/contact"));

// API Routes
app.use("/api/v1/auth", require("./routes/api/auth"));

app.use(function (_req, res) {
  res.status(404).render("pages/page-not-found", {
    title: "Oops! Page Not Found - GrowX",
  });
});

app.use(function (err, _req, res, _next) {
  if (err.message !== "Route not found") {
    console.error(err.stack);
  }

  const { status: statusCode = 500, message = "Internal Server Error" } = err;

  res.status(statusCode).json({
    msg: message,
  });
});

module.exports = app;
