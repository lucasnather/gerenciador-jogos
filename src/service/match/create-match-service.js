import { ResourceRequiredError } from "../../errors/resource-required-error.js"
import { logger } from "../../libs/winston.js"
import { MatchRepository } from "../../repository/match/repository.js"

export class CreateMatchService {

    async handle(kindOfMatch, gameName) {
        if(!kindOfMatch ||  !gameName) {
            logger.info('Não foi enviado os campos necessários')
            throw new ResourceRequiredError('Os campos {tipo da partida} e {nome do jogo} são campos requeridos')
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