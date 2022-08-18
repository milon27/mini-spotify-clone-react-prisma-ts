import { Request, Response } from "express"
import MyResponse from "../models/MyResponse"

const TrackController = {
    addToFav: async (req: Request, res: Response) => {
        const trackId = req.params.id
        await req.prisma.favorites.create({
            data: {
                trackId: parseInt(trackId),
                userId: req.userId
            }
        })
        res.status(200).json(MyResponse("Track Added To Fav list", true))
    },
    getMyFavList: async (req: Request, res: Response) => {
        const list = await req.prisma.favorites.findMany({
            where: {
                userId: req.userId
            },
            select: {
                id: true,
                track: true
            }
        })
        res.status(200).json(MyResponse("Got Fav list successfully", list))
    },
}

export default TrackController