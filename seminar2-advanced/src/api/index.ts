import express, { Router, Response, Request } from "express";

const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.get("/", (req: Request, res: Response) => {  //GET 으로 요청이 들어오면
  
    const api_folder = 'API'
  
    return res.status(200).json({ //요기 로직을 수행!
    status: 200,
    message: "API",
    data: api_folder
  });
});


router.use("/user", require("./user")); // 첫번째 인자의 path를 라우터로 사용
router.use("/blog", require("./blog")); 
router.use("/comment", require("./comment")); 
router.use("/movie", require("./movie")); 
router.use("/members", require("./members")); 


module.exports = router; // 모듈로 반환