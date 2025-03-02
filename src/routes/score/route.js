import { Router } from "express"
import { CreateScoreController } from "../../controller/score/create-score-controller.js"

const router = Router()

const createScoreController = new CreateScoreController()

router
    .post("/api/scores",(req, res, next) => createScoreController.post(req, res, next))

export { router }