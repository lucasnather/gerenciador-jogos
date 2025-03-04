import { TeamPlayerRepository } from "../../repository/team-players/repository.js";
import { PlayerRepository } from "../../repository/player/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"

export class FindTeamByIdService {

    async handle(teamsId) {
        if(!teamsId) throw new ResourceRequiredError('Equipe não encontrada')

        const teamPlayerRepository = new TeamPlayerRepository()
        const playerRepository = new PlayerRepository()

        const teams = await teamPlayerRepository.findManyById(teamsId);

        const players = await Promise.all(
            teams.map(async (team) => {
                const players = await playerRepository.findById(team.playerId)
                
                return players
            })
        )

        return {
            data: {
                status: 201,
                players
            }
        }
    }
}