import { DeleteTeamPlayerByIdService } from "../../service/team-player/delete-team-player-by-id-service.js"


export class DeleteTeamPlayerByIdController {

    async remove(req, res, next) {
        try {
            const { teamsId } = req.params

            const deleteTeamPlayerByIdService = new DeleteTeamPlayerByIdService()
            const teamPlayer = await deleteTeamPlayerByIdService.handle(teamsId)

            res.json(teamPlayer)
        } catch (error) {
           next(error)
        }

    }
}