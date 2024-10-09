const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const employeeRoutes = require("./routes/employee");
const path = require("path");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
express.json();

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://pujalahane2024:uXRflwkhAA58OYgC@cluster0.xiixj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  app.use(express.static(path.join(__dirname, "client", "build")));

  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  //   app.use(express.static((__dirname, "client", "build")));
  //   res.sendFile(path.resolve((__dirname, "client", "build", "index.html")));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
