import { MatchRepository } from "../repository/match/match-repository.js"

export class CreateMatchService {

    async handle(kindOfMatch, gameName) {
        if(!kindOfMatch ||  !gameName) {
            throw new Error('Os campos tipo da partida e nome do jogo são campos requeridos')
        }

        const matchRepository = new MatchRepository()
        const match = await matchRepository.create(kindOfMatch, gameName)

        return {
            data: {
                status: 201,
                match
            }
        }
    }
}