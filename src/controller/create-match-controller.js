import { CreateMatchService } from "../service/create-match-service.js"

export class CreateMatchController {

    async post(req, res) {
        try {
            const { kindOfMatch, gameName } = req.body

            const createMatchService = new CreateMatchService()
            const match = await createMatchService.handle(kindOfMatch, gameName)
            console.log(match)

            res.json(match)
        } catch (error) {
            res.json({
                message: "Server Internal Error"
            })
        }

    }
}