import { MatchRepository } from "../../repository/match/repository.js";
import { TeamPlayerRepository } from "../../repository/team-players/repository.js";
import { PlayerRepository } from "../../repository/player/repository.js";
import { ResourceNotFoundError } from "../../errors/resource-not-found-error.js";
import { ScoreRepository } from "../../repository/score/repository.js";

export class FindManyMatchService {
    async handle(teamWinner, teamLoser, playerWinner, gameName, kindOfMatch) {
        const matchRepository = new MatchRepository();
        const teamPlayerRepository = new TeamPlayerRepository();
        const playerRepository = new PlayerRepository();
        const scoreRepository = new ScoreRepository();

        const matches = await matchRepository.findMany(teamWinner, teamLoser, playerWinner, gameName, kindOfMatch);

        if (!matches || matches.length === 0) {
            throw new ResourceNotFoundError("Nenhuma partida encontrada");
        }

        const matchesWithPlayers = await Promise.all(
            matches.map(async (match) => {
                const teamPlayersLooser = await teamPlayerRepository.findManyById(match.teamLooser.id);
                const teamPlayersWinner = await teamPlayerRepository.findManyById(match.teamWinner.id);

                return {
                    ...match.dataValues,
                    teamWinner: {
                        name: match.teamWinner.name,
                        players: teamPlayersWinner || [],
                    },
                    teamLooser: {
                        name: match.teamLooser.name,
                        players: teamPlayersLooser || [],
                    },
                };
            })
        );

        const matchesWithPlayerNamesAndScores = await Promise.all(
            matchesWithPlayers.map(async (match) => {
                const winnerPlayersWithNamesAndScores = await Promise.all(
                    match.teamWinner.players.map(async (player) => {
                        const playerDetails = await playerRepository.findById(player.playerId);
                        const playerScore = await scoreRepository.findScoreByPlayerId(player.playerId, match.id);

                        return {
                            id: player.id,
                            name: playerDetails.name,
                            score: playerScore ? playerScore.score : null
                        };
                    })
                );

                const looserPlayersWithNamesAndScores = await Promise.all(
                    match.teamLooser.players.map(async (player) => {
                        const playerDetails = await playerRepository.findById(player.playerId);
                        const playerScore = await scoreRepository.findScoreByPlayerId(player.playerId, match.id);

                        return {
                            id: player.id,
                            name: playerDetails.name,
                            score: playerScore ? playerScore.score : null
                        };
                    })
                );

                return {
                    ...match,
                    teamWinner: {
                        ...match.teamWinner,
                        players: winnerPlayersWithNamesAndScores,
                    },
                    teamLooser: {
                        ...match.teamLooser,
                        players: looserPlayersWithNamesAndScores,
                    },
                };
            })
        );

        return {
            data: {
                status: 200,
                matches: matchesWithPlayerNamesAndScores,
            },
        };
    }
}