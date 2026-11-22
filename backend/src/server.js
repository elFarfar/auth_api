import express from "express";
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

const app = express();
const PORT = process.env.Port || 5000;

app.use(helmet());
app-use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

//Test_API
app.get("api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Authentication Api is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on https://localhost:${PORT}`);

    
});