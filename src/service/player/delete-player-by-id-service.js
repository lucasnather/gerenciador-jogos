import { PlayerRepository } from "../../repository/player/repository.js";

export class DeletePlayerByIdService {

    async handle(id) {
        if(!id) throw new Error('O id é um campo requerido')

        const playerRepository = new PlayerRepository()
        const player = await playerRepository.findById(id)

        if(!player) throw new Error("Jogador não encontrado")

        await playerRepository.remove(id)

        return {
            data: {
                status: 201,
                player: "Deletado com sucesso"
            }
        }
    }
}