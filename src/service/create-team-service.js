import { and } from "sequelize";
import { TeamRepository } from "../repository/team/team-repository.js";

export class CreateTeamService {

    async handle(name) {
        if(name !== 'roxa' && name !== 'amarela') {
            throw new Error('Permitido apenas equipe roxa e amarela')
        }

        const teamRepository = new TeamRepository()
        const team = await teamRepository.post(name)

        return {
            data: {
                status: 201,
                team
            }
        }
    }
}