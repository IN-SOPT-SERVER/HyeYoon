import { PrismaClient } from "@prisma/client";
import internal from "stream";
const prisma = new PrismaClient();



//* contentsId로 특정 컨텐츠 조회
const getContentsById = async (contentsId: number) => {
  const contents = await prisma.contents.findUnique({
    where: {
      contentsId
    },
  });

  return contents;
};


//* 컨텐츠 생성
const createContents = async (contentsName: string, year: number, actorsList: string, genreList: string,
                              titleImgUrl: string, featureList: string, howManyEpisode: number) => {
                                const data = await prisma.contents.create({
                                  data: {
                                    contentsName, 
                                    year, 
                                    actorsList, 
                                    genreList, 
                                    titleImgUrl, 
                                    featureList, 
                                    howManyEpisode
                                  },
                                });

                                return data;
                              }


const contentsService = {
    getContentsById,
    createContents
  };
  
  export default contentsService;