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
 * @get http://localhost:2727/track/fav-list
 */
TrackRouter.get('/fav-list', TrackController.getMyFavList)

export default TrackRouter