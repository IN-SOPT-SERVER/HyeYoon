import { Router } from "express";
import { userController } from "../controller";
import { auth } from "../middlewares";
import { body } from "express-validator"

const router: Router = Router();

//router.get("/:userId", userController.getUserById);
router.get("/:userId", auth, userController.getUserById);

//* 유저 생성 - POST api/user
//router.post('/', userController.createUser);

//* 전체 유저 조회 - GET api/user
router.get('/', userController.getAllUser);

//* 유저 정보 업데이트 - PATCH api/user/:userId
router.patch('/:userId', userController.updateUser);

//* 유저 삭제 - DELETE api/user/:userId
router.delete('/:userId', userController.deleteUser);


//==== Seminar6
//* 유저 생성(회원가입) - POST api/user
router.post(
    "/",
    [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
    userController.createUser
  );
  //중간에 들어가는 값: middleware을 배열로 보내주는 것임

//* 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);

export default router;
