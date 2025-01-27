const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('../routes/authRoutes');
const bookingRoutes = require('../routes/bookingRoutes');
const roomRoutes = require('../routes/roomRoutes');
const connectDB = require('./db');

dotenv.config();
const app = express();

//middleware
app.use(express.json()); // Parse JSON requests
app.use(cors());

//routes
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/rooms', roomRoutes);

// Connect to MongoDB
connectDB();
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));



// Import routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes); // Authentication routes
app.use('/api/bookings', bookingRoutes); // Bookings routes
app.use('/api/rooms', roomRoutes)

// API for Register
app.post("/api/register", async (req, res) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password; // Avoid returning the password
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ message: "Error registering user", error: error.message });
  }
});

// API for Login
app.post("/api/login", async (req, res) => {
  try {
    if (req.body.password && req.body.email) {
      let user = await User.findOne({ email: req.body.email, password: req.body.password });
      if (user) {
        Jwt.sign({ user }, jwtkey, { expiresIn: "1h" }, (err, token) => {
          if (err) {
            res.status(500).send({ message: "Token generation failed" });
          } else {
            res.send({ user, token });
          }
        });
      } else {
        res.status(401).send({ message: "Invalid email or password" });
      }
    } else {
      res.status(400).send({ message: "Email and password are required" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
