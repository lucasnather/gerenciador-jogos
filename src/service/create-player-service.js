import { PlayerRepository } from "../repository/player/player-repository.js";

export class CreatePlayerService {

    async handle(name) {
        if(!name ||  name.length === 0) {
            throw new Error('O nome é um campo requerido')
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