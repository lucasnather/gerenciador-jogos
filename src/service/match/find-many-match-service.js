import { MatchRepository } from "../../repository/match/repository.js";

export class FindManyMatchService {

    async handle() {
        const matchRepository = new MatchRepository()
        const matches = await matchRepository.findMany()

        return {
            data: {
                status: 200,
                matches
            }
        }
    }
}