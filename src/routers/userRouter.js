import express from "express";
import {
  postEdit,
  getEdit,
  logout,
  see,
  getChangePassword,
  postChangePassword,
} from "../controllers/userController.js";
import { protectorMiddleware, avatarUpload } from "../middlewares.js";

const userRouter = express.Router();
userRouter.get("/logout", protectorMiddleware, logout);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(avatarUpload.single("avatar"), postEdit);
userRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(getChangePassword)
  .post(postChangePassword);
userRouter.get("/:id", see);

export default userRouter;
