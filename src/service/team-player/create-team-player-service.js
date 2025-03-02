import { TeamPlayerRepository } from "../../repository/team-players/repository.js";
import {  PlayerRepository } from "../../repository/player/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"
import { ResourceNotFoundError } from "../../errors/resource-not-found-error.js"

export class CreateTeamPlayerService {

    async handle(playerId, teamsId) {
        if(!playerId &&  !teamsId) throw new ResourceRequiredError('Os campos de jogadores e time é um campo requerido')

        const teamPlayerRepository = new TeamPlayerRepository()
        const playerRepository = new PlayerRepository()

        const findPlayerById = await playerRepository.findById(playerId)

        if(!findPlayerById) throw new ResourceNotFoundError("Jogador não encontrado")

        const teamsPlayer = await teamPlayerRepository.create(playerId, teamsId)

        return {
            data: {
                status: 201,
                teamsPlayer
            }
        }
    }
}