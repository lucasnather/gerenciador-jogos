import { Matches } from "../../model/entities/matches.js";
import { Teams } from "../../model/entities/teams.js";
import { Player } from "../../model/entities/player.js";
import { Op } from "sequelize";

export class MatchRepository {

    async create(kindOfMatch, gameName) {
        const match = Matches.build({
            kindOfMatch,
            gameName,
        })

        await match.save()
        return match.toJSON()
    }

    async update(matchId, kindOfMatch, gameName, teamWinnerId, teamLooserId, playerWinnerId, scoreId) {
        const fieldsToUpdate = {
            gameName: gameName, 
            kindOfMatch: kindOfMatch, 
            teamWinnerId: teamWinnerId ? teamWinnerId : null, 
            teamLooserId: teamLooserId ? teamLooserId : null, 
            playerWinnerId: playerWinnerId ? playerWinnerId : null, 
            scoreId: scoreId ? scoreId : null, 
        }

        const match = await Matches.update(fieldsToUpdate, {
            where: {
                id: matchId 
            }
        })

        return match
    }

    async findMany(teamWinner, teamLoser,playerWinner, gameName, kindOfMatch) {

        const matches = await Matches.findAll({
            [Op.or]: {
                ...(gameName && {
                    where: {
                        gameName: {
                            [Op.like]: `%${gameName}%`
                        },
                    }
                }),
                ...(kindOfMatch && {
                    where: {
                        kindOfMatch
                    }
                }),
            },
            include: [
                {
                    model: Player,
                    as: 'playerWinner',
                    foreignKey: 'playerWinnerId',
                    ...(playerWinner && {
                        where: {
                            name: {
                                [Op.like]: `%${playerWinner}%`
                            }
                        }
                    })
                },
                {
                    model: Teams,
                    as: 'teamWinner',
                    foreignKey: 'teamWinnerId',
                    ...(teamWinner && {
                        where: {
                            name: {
                                [Op.like]: `%${teamWinner}%`
                            }
                        }
                    })
                },
                {
                    model: Teams,
                    as: 'teamLooser',
                    foreignKey: 'teamLooserId',
                    ...(teamLoser && {
                        where: {
                            name: {
                                [Op.like]: `%${teamLoser}%`
                            }
                        }
                    })
                }
            ]
        })

        if(!matches) return null
        

        return matches
    }

    async findById(id) {
        const match = await Matches.findOne({
            where: { id },
            include: [
                {
                    model: Player,
                    as: 'playerWinner',
                    foreignKey: 'playerWinnerId'
                },
                {
                    model: Teams,
                    as: 'teamWinner',
                    foreignKey: 'teamWinnerId'
                },
                {
                    model: Teams,
                    as: 'teamLooser',
                    foreignKey: 'teamLooserId'
                }
            ]
        });

        if(!match) return null

        return match.toJSON()
    }
}