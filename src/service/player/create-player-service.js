import { PlayerRepository } from "../../repository/player/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"

export class CreatePlayerService {

    async handle(name) {
        if(!name ||  name.length === 0) {
            throw new ResourceRequiredError('O nome é um campo requerido')
        }

        const playerRepository = new PlayerRepository()
        const player = await playerRepository.create(name)

        return {
            data: {
                status: 201,
                player
            }
        }
    }
}