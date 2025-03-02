import { TeamPlayers } from "../../model/entities/team-players.js";

export class TeamPlayerRepository {

    async post(playerId, teamsId) {
        const teamPlayers = TeamPlayers.build({
            playerId,
            teamsId
        })

        await teamPlayers.save()
        return teamPlayers.toJSON()
    }
}

