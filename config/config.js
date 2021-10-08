import mongoose from "mongoose";

const config = {
    port: process.env.PORT || 3000,
    connect: () => {
        const mongoUri =
            "mongodb://" +
            process.env.DB_USER +
            ":" +
            process.env.DB_PASS +
            "@" +
            process.env.DB_HOST +
            "/" +
            process.env.DB_NAME;

        mongoose.connect(mongoUri);
    },
};

export default config;
