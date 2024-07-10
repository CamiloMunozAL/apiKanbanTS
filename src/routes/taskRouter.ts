import { Router } from "express";
import authMiddleware from "../middleware/authMiddlware";
import {getAllTasks,createTask,updateTask,deleteTask} from "../controllers/taskController";

const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.get("/tasks", getAllTasks);
taskRouter.post("/tasks", createTask);
taskRouter.patch("/tasks/:id_task", updateTask);
taskRouter.delete("/tasks/:id_task", deleteTask);

export default taskRouter;