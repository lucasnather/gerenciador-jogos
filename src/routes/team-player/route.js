import { Router } from "express"
import { CreateTeamPlayerController } from "../../controller/team-player/create-team-player-controller.js"
import { FindTeamByIdController } from "../../controller/team-player/find-teams-by-id-controller.js"

const router = Router()

const createTeamPlayerController = new CreateTeamPlayerController()
const findTeamByIdController = new FindTeamByIdController()

router
    .post("/api/players/teams" ,(req, res, next) => createTeamPlayerController.post(req, res, next))
    .get("/api/players/teams/:teamsId" ,(req, res, next) => findTeamByIdController.get(req, res, next))

export { router }