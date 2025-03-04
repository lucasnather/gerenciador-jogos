import { ResourceNotFoundError } from "../../errors/resource-not-found-error.js";
import { ScoreRepository } from "../../repository/score/repository.js";

export class UpdateScoreService {

    async handle(scoreId, score) {
        const scoreRepository = new ScoreRepository()
        const findScoreById = await scoreRepository.findById(scoreId)
      
        if(!findScoreById) throw new ResourceNotFoundError("Partida não encontrada")
 
        const scores = await scoreRepository.update(scoreId, score)

        const response = scores[0] === 1 ? "Atualizado com sucesso" : "Não foi possível ser atualizado"

        return {
            data: {
                status: 201,
                match: response
            }
        }
    }
}