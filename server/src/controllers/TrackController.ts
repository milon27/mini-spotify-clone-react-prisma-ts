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
}

export default TrackController