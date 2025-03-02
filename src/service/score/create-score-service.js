import { ScoreRepository } from "../../repository/score/repository.js";

export class CreateScoreService {

    async handle(score, playerId) {
        if(!score || !playerId) {
            throw new Error('Os campos pontuação e jogador são campos requeridos')
        }

        const scoreRepository = new ScoreRepository()
        const scores = await scoreRepository.create(score, playerId)

        return {
            data: {
                status: 201,
                scores
            }
        }
    }
}