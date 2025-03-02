import { Router } from "express"
import { CreateMatchController } from "../../controller/match/create-match-controller.js"
import { UpdateMatchController } from "../../controller/match/update-match-controller.js"

const router = Router()

const createMatchController = new CreateMatchController()
const updateMatchController = new UpdateMatchController()

router
    .post("/api/matches",(req, res, next) => createMatchController.post(req, res, next))
    .put("/api/matches/:matchId", (req, res, next) => updateMatchController.put(req, res, next))

export { router }