import express from "express";
import { PORT } from "./config/config";

const app = express();
app.listen(PORT, () => {
    console.log(`Aplikasi berjalan pada Port: ${PORT}`);
});