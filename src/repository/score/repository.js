import { Scores } from "../../model/entities/score.js";

export class ScoreRepository {

    async create(score, playerId) {
        const scores = Scores.build({
            score,
            playerId
        })

        await scores.save()
        return scores.toJSON()
    }
}

