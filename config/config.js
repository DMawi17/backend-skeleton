import mongoose from "mongoose";

const config = {
    port: process.env.PORT || 3000,
    connect: async () => {
        const { DB_USER, DB_PASS, DB_NAME, DB_HOST } = process.env;
        const mongoUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`;
        mongoose.connection.on("connected", () => {
            console.log(`Connected to database`);
        });
        mongoose.connection.on("error", () => {
            throw new Error(`unable to connect to database`, err);
        });
        await mongoose.connect(mongoUri);
    },
};

export default config;
