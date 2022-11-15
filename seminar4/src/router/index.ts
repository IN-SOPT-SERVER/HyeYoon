import { Router } from "express";
import userRouter from "./userRouter";
import contentsRouter from "./contentsRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/contents", contentsRouter);

export default router;
