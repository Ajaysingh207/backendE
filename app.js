import dotenv from "dotenv";
dotenv.config(); 

import express from "express";


import contactRoutes from "./routes/contactRoutes.js";

// Load environment variables


// Create Express app
const app = express();
 
// ⚡ CORS configuration
// app.use(cors({
//   origin:process.env.FRONTEND_URL,   // only allow your frontend
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true,                   // only if your frontend uses cookies/auth
// }));

// Middleware
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
