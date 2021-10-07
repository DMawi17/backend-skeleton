import User from "../models/user.model.js";

const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(400).json({
            error: err.message,
        });
    }
};

const list = async (req, res) => {
    try {
        let users = await User.find().select("name and thought");
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const userByID = async (req, res, next, id) => {
    try {
        let user = await User.findById(id);
        if (!user)
            res.status("400").json({
                error: "User not found",
            });
        req.profile = user;
        next();
    } catch (err) {
        res.status("400").json({
            error: "Could not retrieve user",
        });
    }
};

const read = (req, res) => {
    let user = req.profile;
    user.password = undefined;
    user.__v = undefined;
    res.json(user);
};

const update = async (req, res) => {
    try {
        let user = req.profile;
        Object.assign(user, req.body);
        await user.save();
        user.password = undefined;
        user.__v = undefined;
        res.json(user);
    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });
    }
};

const remove = async (req, res) => {
    try {
        let user = req.profile;
        let deletedUser = await user.remove();
        deletedUser.password = undefined;
        deletedUser.__v = undefined;
        res.json(deletedUser);
    } catch (err) {
        return res.status(400).json({
            error: err.message,
        });
    }
};

export default { create, read, update, remove, userByID, list };
