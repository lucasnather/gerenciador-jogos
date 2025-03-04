import { Router } from "express"
import { CreateScoreController } from "../../controller/score/create-score-controller.js"
import { DeleteScoreController } from "../../controller/score/delete-score-controller.js"
import { UpdateScoreController } from "../../controller/score/update-score-controller.js"

const router = Router()

const createScoreController = new CreateScoreController()
const deleteScoreController = new DeleteScoreController()
const updateScoreController = new UpdateScoreController()

router
    .post("/api/scores",(req, res, next) => createScoreController.post(req, res, next))
    .delete("/api/scores/:scoreId",(req, res, next) => deleteScoreController.remove(req, res, next))
    .put("/api/scores/:scoreId",(req, res, next) => updateScoreController.put(req, res, next))

export { router }