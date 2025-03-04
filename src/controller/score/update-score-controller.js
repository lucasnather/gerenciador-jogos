import { UpdateScoreService } from "../../service/score/update-score-service.js"

export class UpdateScoreController {

    async put(req, res, next) {
        try {
            const { score } = req.body
            const { scoreId } = req.params
            
            const updateScoreService = new UpdateScoreService()
            const scores = await updateScoreService.handle(Number(scoreId),score)
            res.json(scores).status(204)
        } catch (error) {
            next(error)
        }

    }
}