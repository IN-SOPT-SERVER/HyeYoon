import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();


router.get("/", (req: Request, res: Response) => {  //GET 으로 요청이 들어오면
  
    const blog = '로그로그블로그'
  
    return res.status(200).json({ //요기 로직을 수행!
    status: 200,
    message: "블로그 조회 성공",
    data: blog
  });
});

module.exports = router;    // 위 생성한 route 객체를 어디에서든 사용하도록 모듈화.