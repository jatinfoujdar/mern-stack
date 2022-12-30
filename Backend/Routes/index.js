import  express  from "express";
import taskRouter from "./tasks.js"

const router = express.Router();
router.use("/tasks",taskRouter)


export default router;