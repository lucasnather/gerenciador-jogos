import { UpdateMatchService } from "../../service/match/update-match-service.js"

export class UpdateMatchController {

    async put(req, res, next) {
        try {
            const {kindOfMatch, gameName, teamWinnerId, teamLooserId, playerWinnerId, scoreId } = req.body
            const { matchId } = req.params
            
            const updateMatchService = new UpdateMatchService()
            const match = await updateMatchService.handle(Number(matchId), kindOfMatch, gameName,  teamWinnerId, teamLooserId, playerWinnerId, scoreId )
            res.json(match).status(204)
        } catch (error) {
            next(error)
        }

    }
}