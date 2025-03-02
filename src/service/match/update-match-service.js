import { MatchRepository } from "../../repository/match/repository.js"

export class UpdateMatchService {

    async handle(matchId, kindOfMatch, gameName, teamWinnerId, teamLooserId, playerWinnerId, scoreId) {
        let updateKindOfMatch;
        let updateGameName;

        const matchRepository = new MatchRepository()
        const findMatchById = await matchRepository.findById(matchId)

        if(!findMatchById) throw new Error("Partida não encontrada")
        

        if(kindOfMatch) {
            updateKindOfMatch = kindOfMatch
        } else {
            updateKindOfMatch = findMatchById.kindOfMatch
        }

        if(gameName) {
            updateGameName = gameName
        } else {
            updateGameName = findMatchById.gameName
        }

        const match = await matchRepository.update(matchId, updateKindOfMatch, updateGameName, teamWinnerId, teamLooserId, playerWinnerId, scoreId)

        const response = match[0] === 1 ? "Atualizado com sucesso" : "Não foi possível ser atualizado"

        return {
            data: {
                status: 201,
                match: response
            }
        }
    }
}