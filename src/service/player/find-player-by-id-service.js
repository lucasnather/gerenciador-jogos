import { PlayerRepository } from "../../repository/player/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"
import { ResourceNotFoundError } from "../../errors/resource-not-found-error.js"
import { InvalidTypeError } from "../../errors/invalid-type-error.js"
import { validate  } from "uuid"

export class FindPlayerByIdService {

    async handle(id) {
        if(!id) throw new ResourceRequiredError('O id é um campo requerido')

        if(!validate(id)) throw new InvalidTypeError("Formato do Id inválido")

        const playerRepository = new PlayerRepository()
        const player = await playerRepository.findById(id)

        if(!player) throw new ResourceNotFoundError("Jogador não encontrado")

        return {
            data: {
                status: 201,
                player
            }
        }
    }
}