import { Matches } from "../../model/entities/matches.js";

export class MatchRepository {

    async create(kindOfMatch, gameName) {
        const match = Matches.build({
            kindOfMatch,
            gameName,
        })

        await match.save()
        return match.toJSON()
    }
}