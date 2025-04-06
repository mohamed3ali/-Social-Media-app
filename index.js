import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./DB/connection.js";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
const app = express();

const port = 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
connectDB();
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
