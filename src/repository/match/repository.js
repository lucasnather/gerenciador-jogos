import { Matches } from "../../model/entities/matches.js";

export class MatchRepository {

    async create(kindOfMatch, gameName) {
        const match = Matches.build({
            kindOfMatch,
            gameName,
        })

        await match.save()
        return match.toJSON()
    }

    async update(matchId, kindOfMatch, gameName, teamWinnerId, teamLooserId, playerWinnerId, scoreId) {
        const fieldsToUpdate = {
            gameName: gameName, 
            kindOfMatch: kindOfMatch, 
            teamWinnerId: teamWinnerId ? teamWinnerId : null, 
            teamLooserId: teamLooserId ? teamLooserId : null, 
            playerWinnerId: playerWinnerId ? playerWinnerId : null, 
            scoreId: scoreId ? scoreId : null, 
        }

        const match = await Matches.update(fieldsToUpdate, {
            where: {
                id: matchId 
            }
        })

        console.log(match)
        return match
    }

    async findById(id) {
        const match = await Matches.findByPk(id)
        return match.toJSON()
    }
}