import { FindMatchByIdService } from "../../service/match/find-match-by-id-service.js"

export class FindMatchByIdController {

    async get(req, res, next) {
        try {
            const { id } = req.params

            const findMatchByidService = new FindMatchByIdService()
            const match = await findMatchByidService.handle(id)

            res.json(match).status(200)
        } catch (error) {
            next(error)
        }

    }
}