import { ResourceRequiredError } from "../../errors/resource-required-error.js"
import { ScoreRepository } from "../../repository/score/repository.js";

export class DeleteScoreService {

    async handle(scoreId) {
        if(!scoreId) throw new ResourceRequiredError('Pontuação não encontrada')

        const scoreRepository = new ScoreRepository()
        await scoreRepository.remove(scoreId);

        return {
            data: {
                status: 201,
                message: "Pontuação Deletada"
            }
        }
    }
}