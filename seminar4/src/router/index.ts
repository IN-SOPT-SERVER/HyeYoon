import { Router } from "express";
import userRouter from "./userRouter";
import contentsRouter from "./contentsRouter";
import imageRouter from "./imageRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/contents", contentsRouter);
router.use("/image", imageRouter);


export default router;
