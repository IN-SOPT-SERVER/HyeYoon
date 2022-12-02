import { Request, Response } from "express";
import { userService } from "../service";
import { UserCreateDTO } from "../interfaces/UserCreateDTO";
import { rm, sc } from "../constants"
import { validationResult } from "express-validator";
import jwtHandler from "../modules/jwtHandler"
import { success, fail } from  "../constants/response"
import { UserSignInDTO } from "../interfaces/userSignInDTO";
import { UserUpdateDTO } from "../interfaces/UserUpdateDTO";



//* 유저 생성
// const createUser = async ( req : Request, res : Response ) => {
//   const { userName, email, age } = req.body //! 비구조화 할당
//   //const { userId } = req.params
  
//   if(!userName || !email || !age)
//     return res.status(400).json({ status: 400, message: "유저 생성 실패" });

//   const data = await userService.createUser(userName, email, age);

//   if (!data) {
//     return res.status(400).json({ status: 400, message: "유저 생성 실패" });
//   }
//   return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
// };

//* 유저 전체 조회 + 페이지네이션
const getAllUser = async ( req : Request, res : Response ) => {
  // const data = await userService.getAllUser();
  // console.log('c_data: ', data)
  // if (!data) {
  //   return res.status(400).json({ status: 400, message: "유저 조회 실패" });
  // }
  // return res.status(200).json({ status: 200, message: "유저 전체 조회 성공", data });

  //====페이지네이션
  const { page, limit } = req.query;
  const data = await userService.getAllUser(Number(page), Number(limit));
  if (!data) {
    return res.status(400).json({ status: 400, message: "유저 조회 실패" });
  }
  return res.status(200).json({ status: 200, message: "유저 전체 조회 성공", data });


};

//* 유저 정보 업데이트
const updateUser = async ( req : Request, res : Response ) => {
  //const { userName } = req.body;
  //const { userId } = req.params;
  const UserUpdateDto: UserUpdateDTO = req.body;

  if(!UserUpdateDto)
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))

    const updatedUser = await userService.updateUser(UserUpdateDto);
      return res.status(sc.UPDATED).send(success(sc.UPDATED, rm.UPDATE_USER_SUCCESS))
};

//* 유저 삭제
const deleteUser = async ( req : Request, res : Response ) => {
  const { userId } = req.params;

  await  userService.deleteUser(+userId);
  return res.status(sc.DELETED).send(success(sc.DELETED, rm.DELETE_USER_SUCCESS))
};


//* (팟장님 제공) 특정 유저 조회
const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);
  //+userId: 형변환의 꼼수,,? Number(userId)의 편한 버전

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))
  }
  return res.status(sc.OK).send(success(sc.OK, rm.READ_USER_SUCCESS))
};

//* 유저 생성
const createUser = async (req: Request, res: Response) => {

  //? validation의 결과를 바탕으로 분기 처리
  const error = validationResult(req);
  if(!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST))
  };

  //? 기존 비구조화 할당 방식 -> DTO의 형태
  const userCreateDto: UserCreateDTO = req.body;
  const data = await userService.createUser(userCreateDto);

  if (!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SIGNUP_FAIL))
  }

  // ================== 여기 추가 ========================
  //? 아까 만든 jwtHandler 내 sign 함수를 이용해 accessToken 생성
  const accessToken = jwtHandler.sign(data.id);

  const result = {
    id: data.id,
    name: data.userName,
    accessToken,
  };

  return res.status(sc.CREATED).send(success(sc.CREATED, rm.SIGNUP_SUCCESS, result));


};


//* 로그인
const signInUser = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.BAD_REQUEST));
  }

  const userSignInDto: UserSignInDTO = req.body;

  try {
    const userId = await userService.signIn(userSignInDto);

    if (!userId) return res.status(sc.NOT_FOUND).send(fail(sc.NOT_FOUND, rm.NOT_FOUND));
    else if (userId === sc.UNAUTHORIZED)
      return res.status(sc.UNAUTHORIZED).send(fail(sc.UNAUTHORIZED, rm.INVALID_PASSWORD));

    const accessToken = jwtHandler.sign(userId);

    const result = {
      id: userId,
      accessToken,
    };

    res.status(sc.OK).send(success(sc.OK, rm.SIGNIN_SUCCESS, result));
  } catch (e) {
    console.log(error);
    //? 서버 내부에서 오류 발생
    res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

//* GET ~/api/user?keyword = 세훈
const searchUserByName = async (req: Request, res: Response) => {
  const { keyword, option } = req.query;

  const data = await userService.searchUserByName(keyword as string, option as string);

  if(!data) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.SEARCH_USER_FAIL));
  }
  return res.status(sc.OK).send(success(sc.OK, rm.SEARCH_USER_SUCCESS, data));

}


const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  signInUser,
  searchUserByName,
};

export default userController;
