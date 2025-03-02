import { CreateTeamPlayerService } from "../../service/team-player/create-team-player-service.js"

export class CreateTeamPlayerController {

    async post(req, res, next) {
        try {
            const { playerId, teamsId } = req.body

            const createPlayerTeamService = new CreateTeamPlayerService()
            const teamPlayer = await createPlayerTeamService.handle(playerId, teamsId)

            res.json(teamPlayer)
        } catch (error) {
           next(error)
        }

    }
}