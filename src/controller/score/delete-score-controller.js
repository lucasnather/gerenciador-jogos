import { DeleteScoreService } from "../../service/score/delete-score-service.js"

export class DeleteScoreController {

    async remove(req, res, next) {
        try {
            const { scoreId } = req.params

            const deleteScoreService = new DeleteScoreService()
            const score = await deleteScoreService.handle(Number(scoreId))

            res.json(score)
        } catch (error) {
           next(error)
        }

    }
}