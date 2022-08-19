import { Request, Response } from "express"
import MyResponse from "../models/MyResponse"

const TrackController = {
    addToFav: async (req: Request, res: Response) => {
        try {
            const trackId = req.params.id
            await req.prisma.favorites.create({
                data: {
                    trackId: parseInt(trackId),
                    userId: req.userId
                }
            })
            res.status(200).json(MyResponse("Track Added To Fav list", true))
        } catch (e) {
            // console.log("addToFav: ", e);
            res.status(500).json(MyResponse("already added!"))
        }
    },
    getAllAlbumAndFavList: async (req: Request, res: Response) => {
        const albumList = await req.prisma.albums.findMany({
            select: {
                id: true,
                name: true,
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        const favList = await req.prisma.favorites.findMany({
            where: {
                userId: req.userId
            },
            select: {
                track: true
            }
        })
        res.status(200).json(MyResponse("Got Fav list & Albums successfully", {
            albumList,
            favList
        }))
    },
    getAllTrackOfSingleAlbum: async (req: Request, res: Response) => {
        const albumId = parseInt(req.params.id)
        const trackList = await req.prisma.tracks.findMany({
            where: {
                albumsId: albumId
            },
            select: {
                id: true,
                title: true,
                audioUrl: true,
                album: {
                    select: {
                        name: true
                    }
                }
            }
        })
        res.status(200).json(MyResponse("Got Track List successfully", trackList))
    },
    getAllArtist: async (req: Request, res: Response) => {
        const List = await req.prisma.artists.findMany()
        res.status(200).json(MyResponse("Got Artists List successfully", List))
    },
    getAllAlbumOfSingleArtist: async (req: Request, res: Response) => {
        const artistId = parseInt(req.params.id)
        const List = await req.prisma.albums.findMany({
            where: {
                artistsId: artistId
            },
            select: {
                id: true,
                name: true,
                author: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
        res.status(200).json(MyResponse("Got Album List successfully", List))
    },
}

export default TrackController