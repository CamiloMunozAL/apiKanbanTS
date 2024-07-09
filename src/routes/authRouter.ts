import { Router } from "express";


const authRouter = Router();

authRouter.post("/register", (req, res) => {
    res.send("Register");
});



export default authRouter;