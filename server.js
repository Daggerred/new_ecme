import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';

// Configure environment variables
dotenv.config();

// Database configuration
connectDB();
//esmodule fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Create an Express application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, './client/build')))

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Root endpoint
app.use('*',function (req,res) {
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

// Port and mode
const PORT = process.env.PORT || 8000;
const MODE = process.env.DEV_MODE || "development";

// Start the server
app.listen(PORT, () => {
  console.log(`Server Running on ${MODE} mode on port ${PORT}`.bgCyan.white);
});
