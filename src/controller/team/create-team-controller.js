import { CreateTeamService } from "../../service/team/create-team-service.js"

export class CreateTeamController {

    async post(req, res, next) {
        try {
            const { name } = req.body

            const createTeamService = new CreateTeamService()
            const team = await createTeamService.handle(name)

            res.json(team)
        } catch (error) {
            next(error)
        }

    }
}