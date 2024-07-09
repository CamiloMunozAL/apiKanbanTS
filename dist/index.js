"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import {PORT} from "./config.ts";
// import authRouter from "./routes/authRouter.js";
// import sectionRouter from "./routes/sectionRouter.js";
// import taskRouter from "./routes/taskRouter.js";
// import userRouter from "./routes/userRouter.js";
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.send("Kanban API");
});
// app.use("/api",authRouter);
// app.use("/api",sectionRouter);
// app.use("/api",taskRouter);
// app.use("/api",userRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
