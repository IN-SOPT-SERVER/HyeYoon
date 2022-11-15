import { Request, Response } from "express";
import { contentsService } from "../service";

//* 특정 컨텐츠 조회
const getContentsById = async (req: Request, res: Response) => {
    const { contentsId } = req.params;

    const data = await contentsService.getContentsById(+contentsId);

    if(!data) {
        return res.status(404).json({ status: 404, message: "NOT_FOUND" });
    }
    return res.status(200).json({ status: 200, nessage: "컨텐츠 조회 성공", data });
};


//* 컨텐츠 생성
const createContents = async ( req: Request, res: Response ) => {
    const { contentsName, year, actorsList, genreList, titleImgUrl, featureList, howManyEpisode } = req.body

    if( !contentsName || !year || !actorsList || !genreList || !titleImgUrl || !featureList || !howManyEpisode )
        return res.status(400).json({ status: 400, message: "컨텐츠 생성 실패" });
    
    const data = await contentsService.createContents(contentsName, year, actorsList, genreList, titleImgUrl, featureList, howManyEpisode);
    if(!data)
        return res.status(400).json({ status: 400, message: "컨텐츠 생성 실패" });
    return res.status(200).json({ status: 200, message: "컨텐츠 생성 성공", data });
};


//* 컨텐츠 정보 업데이트


//* 컨텐츠 삭제


const contentsController = {
    getContentsById,
    createContents
  };
  



export default contentsController;