import { CreateScoreService } from "../../service/score/create-score-service.js"

export class CreateScoreController {

    async post(req, res, next) {
        try {
            const { score, playerId } = req.body

            const createScoreService = new CreateScoreService()
            const scores = await createScoreService.handle(score, playerId)

            res.json(scores)
        } catch (error) {
            next(error)
        }

    }
}