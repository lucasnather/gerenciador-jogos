import { MatchRepository } from "../../repository/match/repository.js";

export class FindMatchByIdService {

    async handle(id) {
        const matchRepository = new MatchRepository()
        const match = await matchRepository.findById(id)
        const response = !match ? "Nenhuma partida encontrada" : match

        return {
            data: {
                status: 200,
                match: response
            }
        }
    }
}