import { CreateTeamPlayerService } from "../../service/team/create-team-player-service.js"

export class CreateTeamPlayerController {

    async post(req, res) {
        try {
            const { playerId, teamsId } = req.body

            const createPlayerTeamService = new CreateTeamPlayerService()
            const teamPlayer = await createPlayerTeamService.handle(playerId, teamsId)

            res.json(teamPlayer)
        } catch (error) {
            res.json({
                message: "Server Internal Error"
            })
        }

    }
}