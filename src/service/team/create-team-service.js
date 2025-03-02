import { TeamRepository } from "../../repository/team/repository.js";
import { ResourceRequiredError } from "../../errors/resource-required-error.js"

export class CreateTeamService {

    async handle(name) {
        if(name !== 'roxa' && name !== 'amarela') throw new ResourceRequiredError('Permitido apenas equipe roxa e amarela')

        const teamRepository = new TeamRepository()
        const team = await teamRepository.create(name)

        return {
            data: {
                status: 201,
                team
            }
        }
    }
}