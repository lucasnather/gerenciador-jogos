import { TeamPlayers } from "../../model/entities/team-players.js";

export class TeamPlayerRepository {

    async create(playerId, teamsId) {
        const teamPlayers = TeamPlayers.build({
            playerId,
            teamsId
        })

        await teamPlayers.save()
        return teamPlayers.toJSON()
    }

    async findManyById(teamsId) {
        const team = await TeamPlayers.findAll({
            where: {
                teamsId
            }
        })

        if(!team) return null

        return team
    }
}

