import { Router } from "express"
import { CreateTeamPlayerController } from "../../controller/create-team-player-controller.js"

const router = Router()

const createTeamPlayerController = new CreateTeamPlayerController()

router
    .post("/api/players/teams" ,(req, res) => createTeamPlayerController.post(req, res))

export { router }