import express from "express";
import authMiddleware from "../middleware/auth.js";
import {
  signup,
  signin,
  forgetPassword,
  resetPassword,
} from "../controllers/userController.js";

const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
userRouter.post('/forgetPassword',forgetPassword);
userRouter.post('/resetPassword',authMiddleware,resetPassword);

export default userRouter;
