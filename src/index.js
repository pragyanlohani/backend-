import dotenv from "dotenv";
import express from "express";  // Import express
import connectDB from "./db/index.js"; // Import your connectDB function

// Load environment variables
dotenv.config({
    path: './env' // Ensure this path is correct
});

// Create the Express app instance
const app = express(); // Declare the app variable

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`The server is running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
