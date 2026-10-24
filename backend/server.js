
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Quiz API is running!",
    status: "success",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    app: "Quiz",
    status: "healthy",
  });
});

app.listen(PORT, () => {
  console.log(`Quiz backend running on http://localhost:${PORT}`);
});
