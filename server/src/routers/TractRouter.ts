import { Router } from "express";
import TrackController from "../controllers/TrackController";

const TrackRouter = Router()

/**
 * @description add track to fav list of current user
 * @post http://localhost:2727/track/:id
 */
TrackRouter.post('/:id', TrackController.addToFav)

export default TrackRouter