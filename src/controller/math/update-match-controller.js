import { UpdateMatchService } from "../../service/match/update-match-service.js"

export class UpdateMatchController {

    async put(req, res) {
        try {
            const {kindOfMatch, gameName, teamWinnerId, teamLooserId, playerWinnerId, scoreId } = req.body
            const { matchId } = req.params

            const updateMatchService = new UpdateMatchService()
            const match = await updateMatchService.handle(matchId, kindOfMatch, gameName,  teamWinnerId, teamLooserId, playerWinnerId, scoreId )
            res.json(match)
        } catch (error) {
            res.json({
                message: "Server Internal Error"
            })
        }

    }
}