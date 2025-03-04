import { FindManyMatchService } from "../../service/match/find-many-match-service.js"

export class FindaManyMatchController {

    async get(req, res, next) {
        try {
            const findManyMatchService = new FindManyMatchService()
            const matches = await findManyMatchService.handle()

            res.json(matches).status(200)
        } catch (error) {
            next(error)
        }

    }
}