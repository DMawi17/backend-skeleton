import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router.route("/users").post(userCtrl.create).get(userCtrl.list);

router.param("userId", userCtrl.userByID);
router
    .route("/users/:userId")
    .get(userCtrl.read)
    .patch(userCtrl.update)
    .delete(userCtrl.remove);

export default router;
