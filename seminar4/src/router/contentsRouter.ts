import { Router } from "express";
import { contentsController } from "../controller";

const router: Router = Router();

//* 특정 컨텐츠 조회 - GET api/contents/:contentsId
router.get("/:contentsId", contentsController.getContentsById);

//* 컨텐츠 생성 - POST api/contents
router.post("/", contentsController.createContents);

//* 컨텐츠 정보 업데이트
//router.patch("/:contentsId", contentsController.updateContents);

//* 컨텐츠 삭제
//router.delete("/:contentsId", contentsController.deleteContents);


export default router;
