import { CreateTeamService } from "../../service/team-player/create-team-service.js"

export class CreateTeamController {

    async post(req, res) {
        try {
            const { name } = req.body

            const createTeamService = new CreateTeamService()
            const team = await createTeamService.handle(name)

            res.json(team)
        } catch (error) {
            res.json({
                message: "Server Internal Error"
            })
        }

    }
}