import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import config from "./config/config.js";

const app = express();

app.use(express.json()); // parse body params and attache to req.body
app.use("/", userRoutes); // mount routes

dotenv.config();
await config.connect();

app.listen(config.port, () => {
    console.info("Server started on port %s.", config.port);
});
