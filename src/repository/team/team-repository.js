import { Teams } from "../../model/entities/teams.js";

export class TeamRepository {

    async create(name) {
        const team = Teams.build({
            name
        })

        await team.save()
        return team.toJSON()
    }
}

