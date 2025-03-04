import { Router } from "express"
import { CreateMatchController } from "../../controller/match/create-match-controller.js"
import { FindaManyMatchController } from "../../controller/match/find-many-match-controller.js"
import { FindMatchByIdController } from "../../controller/match/find-match-by-id-controller.js"
import { UpdateMatchController } from "../../controller/match/update-match-controller.js"

const router = Router()

const createMatchController = new CreateMatchController()
const updateMatchController = new UpdateMatchController()
const findManyMatchController = new FindaManyMatchController()
const findMatchByIdController = new FindMatchByIdController()

router
    .post("/api/matches",(req, res, next) => createMatchController.post(req, res, next))
    .put("/api/matches/:matchId", (req, res, next) => updateMatchController.put(req, res, next))
    .get("/api/matches", (req, res, next) => findManyMatchController.get(req, res, next))
    .get("/api/matches/:id", (req, res, next) => findMatchByIdController.get(req, res, next))

export { router }