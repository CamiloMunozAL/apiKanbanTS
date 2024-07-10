import { Router } from "express";
import authMiddleware from "../middleware/authMiddlware";
import { getUserProfile,updateUserProfile } from "../controllers/userController";

const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.get("/user/profile", getUserProfile);
userRouter.patch("/user/profile", updateUserProfile);

export default userRouter;