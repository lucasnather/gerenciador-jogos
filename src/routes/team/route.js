import { Router } from "express"
import { CreateTeamController } from "../../controller/create-team-controller.js"

const router = Router()

const createTeamController = new CreateTeamController()

router
    .post("/api/teams",(req, res) => createTeamController.post(req, res))

export { router }