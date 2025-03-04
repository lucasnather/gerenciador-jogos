import { FindTeamByIdService } from "../../service/team-player/find-teams-by-id-service.js"

export class FindTeamByIdController {

    async get(req, res, next) {
        try {
            const { teamsId } = req.params

            const findTeamByIdService = new FindTeamByIdService()
            const teamPlayer = await findTeamByIdService.handle(teamsId)

            res.json(teamPlayer)
        } catch (error) {
           next(error)
        }

    }
}