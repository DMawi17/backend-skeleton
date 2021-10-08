import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import config from "./config/config.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json()); // parse body params
app.use("/", userRoutes); // mount routes

dotenv.config();

config.connect(config.mongoUri);

mongoose.connection.on("connected", () => {
    console.log(`Connected to database`);
});
mongoose.connection.on("error", () => {
    throw new Error(`unable to connect to database`);
});

app.listen(config.port, () => {
    console.info("Server started on port %s.", config.port);
});
