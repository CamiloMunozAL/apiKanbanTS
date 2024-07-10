"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const sectionRouter_1 = __importDefault(require("./routes/sectionRouter"));
const taskRouter_1 = __importDefault(require("./routes/taskRouter"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
console.clear();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (_, res) => {
    res.send("Kanban API");
});
app.use("/api", authRouter_1.default);
app.use("/api", sectionRouter_1.default);
app.use("/api", taskRouter_1.default);
app.use("/api", userRouter_1.default);
// // Middleware para manejar rutas no encontradas
// app.use((_: Request, res: Response) => {
//     res.status(404).send("Path not found");
// });
app.listen(config_1.PORT, () => {
    console.log(`Server is running on port ${config_1.PORT}`);
});
