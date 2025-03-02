import { PlayerRepository } from "../../repository/player/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"
import { validate } from "uuid";

export class DeletePlayerByIdService {

    async handle(id) {
        if(!id) throw new Error('O id é um campo requerido')

        if(!validate(id)) throw new InvalidTypeError("Formato do Id inválido")

        const playerRepository = new PlayerRepository()
        const player = await playerRepository.findById(id)

        if(!player) throw new ResourceRequiredError("Jogador não encontrado")

        await playerRepository.remove(id)

        return {
            data: {
                status: 201,
                player: "Deletado com sucesso"
            }
        }
    }
}