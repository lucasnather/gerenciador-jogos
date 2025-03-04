import { Router } from "express"
import { CreateTeamPlayerController } from "../../controller/team-player/create-team-player-controller.js"
import { DeleteTeamPlayerByIdController } from "../../controller/team-player/delete-team-player-by-id-controller.js"
import { FindTeamByIdController } from "../../controller/team-player/find-teams-by-id-controller.js"
import { UpdateTeamPlayerController } from "../../controller/team-player/update-team-player-service.js"

const router = Router()

const createTeamPlayerController = new CreateTeamPlayerController()
const findTeamByIdController = new FindTeamByIdController()
const deleteTeamPlayerByIdController = new DeleteTeamPlayerByIdController()
const updateTeamPlayerController = new UpdateTeamPlayerController()

router
    .post("/api/players/teams" ,(req, res, next) => createTeamPlayerController.post(req, res, next))
    .get("/api/players/teams/:teamsId" ,(req, res, next) => findTeamByIdController.get(req, res, next))
    .delete("/api/players/teams/:teamsId" ,(req, res, next) => deleteTeamPlayerByIdController.remove(req, res, next))
    .put("/api/players/teams/:id" ,(req, res, next) => updateTeamPlayerController.put(req, res, next))

export { router }