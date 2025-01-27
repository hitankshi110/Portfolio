const express = require("express");
// const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const roomRoutes = require('./routes/roomRoutes');
const connectDB = require('./config/db');

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

// Import routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes); // Authentication routes
app.use('/api/bookings', bookingRoutes); // Bookings routes
app.use('/api/rooms', roomRoutes) // Room routes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
