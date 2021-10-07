import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required",
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: "Password is required",
    },
    thought: String,
});

export default mongoose.model("User", UserSchema);
