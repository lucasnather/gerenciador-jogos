import { FindManyMatchService } from "../../service/match/find-many-match-service.js"

export class FindaManyMatchController {

    async get(req, res, next) {
        try {
            const { 
                teamWinner, 
                teamLoser,
                playerWinner, 
                gameName, 
                kindOfMatch
             } = req.query

            const findManyMatchService = new FindManyMatchService()
            const matches = await findManyMatchService.handle(
                teamWinner, 
                teamLoser,
                playerWinner, 
                gameName, 
                kindOfMatch
            )
            res.json(matches).status(200)
        } catch (error) {
            next(error)
        }

    }
}