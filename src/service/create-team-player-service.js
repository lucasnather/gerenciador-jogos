import { TeamPlayerRepository } from "../repository/team-players/team-players.repository.js";

export class CreateTeamPlayerService {

    async handle(playerId, teamsId) {
        if(!playerId &&  !teamsId) {
            throw new Error('Os campos de jogadores e time é um campo requerido')
        }

        const teamPlayerRepository = new TeamPlayerRepository()
        const teamsPlayer = await teamPlayerRepository.create(playerId, teamsId)

        return {
            data: {
                status: 201,
                teamsPlayer
            }
        }
    }
}