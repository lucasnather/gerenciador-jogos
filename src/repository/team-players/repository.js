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
        const teamPlayers = await TeamPlayers.findAll({
            where: {
                teamsId
            }
        })
        
        if(!teamPlayers) return null

        return teamPlayers
    }

    async remove(id) {
        await TeamPlayers.destroy({
            where: {
                id
            }
        })
    }

    async update(id, playerId, teamsId) {
        const teamPlayers = await TeamPlayers.update({ playerId, teamsId }, {
            where: {
                id
            }
        })
    }
}

