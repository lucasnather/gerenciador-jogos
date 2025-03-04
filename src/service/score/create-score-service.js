import { ScoreRepository } from "../../repository/score/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"

export class CreateScoreService {

    async handle(score, playerId, matchId) {
        if(!score || !playerId) throw new ResourceRequiredError('Os campos pontuação e jogador são campos requeridos')

        const scoreRepository = new ScoreRepository()
        const scores = await scoreRepository.create(score, playerId, matchId)

        return {
            data: {
                status: 201,
                scores
            }
        }
    }
}