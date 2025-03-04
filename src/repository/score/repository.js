import { Op } from "sequelize";
import { Scores } from "../../model/entities/score.js";

export class ScoreRepository {

    async create(score, playerId, matchId) {
        const scores = Scores.build({
            score,
            playerId,
            matchId
        })

        await scores.save()
        return scores.toJSON()
    }

    async findScoreByPlayerId(playerId, matchId) {
        const score = await Scores.findOne({
            where: {
                [Op.and]: [
                    {
                        playerId
                    },
                    {
                        matchId
                    }
                ]
            }
        })

        if(!score) return null

        return score
    }

    async update(id, score) {
        const scores = await Scores.update({ score }, {
            where: {
                id
            }
        })
        console.log(scores)

        return scores
    }

    async findById(id) {
        const score = await Scores.findOne({
            where: {
                id
            }
        })

        if(!score) return null

        return score
    }

    async remove(id) {
        await Scores.destroy({
            where: {
                id
            }
        })
    }
}

