import { ResourceNotFoundError } from "../../errors/resource-not-found-error.js";
import { TeamPlayerRepository } from "../../repository/team-players/repository.js";

export class UpdateTeamPlayerService {

    async handle(id, playerId, teamsId) {
        const teamPlayerRepository = new TeamPlayerRepository()
        const findTeamPlayerById = await teamPlayerRepository.findById(id)
      
        if(!findTeamPlayerById) throw new ResourceNotFoundError("Jogador na Equipe não encontrada")
 
        const teamPlayers = await teamPlayerRepository.update(id, playerId, teamsId)

        const response = teamPlayers[0] === 1 ? "Atualizado com sucesso" : "Não foi possível ser atualizado"

        return {
            data: {
                status: 201,
                match: response
            }
        }
    }
}