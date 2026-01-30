import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables


// Create Express app
const app = express();
 
// ⚡ CORS configuration

const allowedOrigins = [
  "http://localhost:5173",       // Vite local frontend
  process.env.FRONTEND_URL       // Your production frontend
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman or curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true,
}));

// Middleware
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
