import { UpdateTeamPlayerService } from "../../service/team-player/update-team-player-service.js"

export class UpdateTeamPlayerController {

    async put(req, res, next) {
        try {
            const { playerId, teamsId } = req.body
            const { id } = req.params
            
            const updateTeamPlayerService = new UpdateTeamPlayerService()
            const teamPlayer = await updateTeamPlayerService.handle(Number(id),playerId, teamsId)
            res.json(teamPlayer).status(204)
        } catch (error) {
            next(error)
        }

    }
}