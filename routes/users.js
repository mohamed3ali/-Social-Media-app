import express from "express";
import * as userController from "./controller/users.controller.js";

const router = express.Router();

router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);
router.put("/:id/follow", userController.followUser);
router.put("/:id/unfollow", userController.unFollowUser);

export default router;
