import express from "express";
import * as postController from "./controller/post.controller.js";
const router = express.Router();

router.post("/", postController.addPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.put("/:id/like", postController.likePost);
router.get("/:id", postController.getPost);
router.get("/timeline/all", postController.timelinePosts);
export default router;
