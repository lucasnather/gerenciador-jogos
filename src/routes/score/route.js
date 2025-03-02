import { Router } from "express"
import { CreateScoreController } from "../../controller/score/create-score-controller.js"

const router = Router()

const createScoreController = new CreateScoreController()

router
    .post("/api/scores",(req, res) => createScoreController.post(req, res))

export { router }