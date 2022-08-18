import { Router } from "express";
import TrackController from "../controllers/TrackController";

const TrackRouter = Router()

/**
 * @description add track to fav list of current user
 * @post http://localhost:2727/track/add-fav/:id
 */
TrackRouter.post('/add-fav/:id', TrackController.addToFav)

/**
 * @description get fav list of current user
 * @get http://localhost:2727/track/get-album-fav-list
 */
TrackRouter.get('/get-album-fav-list', TrackController.getAllAlbumAndFavList)

/**
 * @description get all tracks for a album
 * @get http://localhost:2727/track/album-tracks/:id
 */
TrackRouter.get('/album-tracks/:id', TrackController.getAllTrackOfSingleAlbum)

/**
 * @description get all Artists
 * @get http://localhost:2727/track/artists
 */
TrackRouter.get('/artists', TrackController.getAllArtist)

/**
 * @description get all Artists
 * @get http://localhost:2727/track/artist/get-albums/:id
 */
TrackRouter.get('/artist/get-albums/:id', TrackController.getAllAlbumOfSingleArtist)


export default TrackRouter