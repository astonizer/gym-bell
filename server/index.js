require("dotenv").config();
const express = require("express");

const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorMiddlewares");

var cors = require("cors");

// Initialize express app
const app = express();
app.use(cors());

// Importing all routes
const authRoutes = require("./routes/authRoutes");
const tempRoutes = require("./routes/tempRoutes");

// Environment variables
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());

// Database connection
connectDB();

// Authentication routes
app.use("/api/auth", authRoutes);

// Private routes
// app.use('/api/profile', profileRoutes);

// Temp routes
app.use("/api/temp", tempRoutes);

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
