import  express  from "express";
import taskRouter from "./tasks.js"
import authRouter from "./tasks.js"
import userRouter from "./user.js"

const router = express.Router();

router.use("/tasks",taskRouter)
router.use("/auth", authRouter)
router.use("/user", userRouter)

export default router;