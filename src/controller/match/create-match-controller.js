import { CreateMatchService } from "../../service/match/create-match-service.js"

export class CreateMatchController {

    async post(req, res, next) {
        try {
            const { kindOfMatch, gameName } = req.body

            const createMatchService = new CreateMatchService()
            const match = await createMatchService.handle(kindOfMatch, gameName)

            res.json(match).status(201)
        } catch (error) {
            next(error)
        }

    }
}