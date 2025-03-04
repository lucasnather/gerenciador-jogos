import { TeamPlayerRepository } from "../../repository/team-players/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"

export class DeleteTeamPlayerByIdService {

    async handle(teamsId) {
        if(!teamsId) throw new ResourceRequiredError('Equipe não encontrada')

        const teamPlayerRepository = new TeamPlayerRepository()

        await teamPlayerRepository.remove(teamsId);

        return {
            data: {
                status: 201,
                message: "Jodagor na Equipe Deletado"
            }
        }
    }
}