import { Router } from "express"
import { CreateTeamPlayerController } from "../../controller/team-player/create-team-player-controller.js"

const router = Router()

const createTeamPlayerController = new CreateTeamPlayerController()

router
    .post("/api/players/teams" ,(req, res, next) => createTeamPlayerController.post(req, res, next))

export { router }