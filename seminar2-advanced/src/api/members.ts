import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

interface Introduce {
    name: string;
    age: number;
    home: string;
    favoriteFood: string;
}

const members : Introduce[] = [
    {
        name: '임채영',
        age: 21,
        home: '이대역',
        favoriteFood: '초밥'
    },
    {
        name: '백혜윤',
        age: 23,
        home: '광교중앙역',
        favoriteFood: '파스타'
    }
]

router.get("/", (req: Request, res: Response) => {  //GET 으로 요청이 들어오면
  
    return res.status(200).json({ //요기 로직을 수행!
    status: 200,
    message: "멤버 조회 성공",
    data: members
  });
});

module.exports = router;    // 위 생성한 route 객체를 어디에서든 사용하도록 모듈화.