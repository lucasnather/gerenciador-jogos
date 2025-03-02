import { FindPlayerByIdService } from "../../service/player/find-player-by-id-service.js"

export class FindPlayerByIdController {

    async get(req, res, next) {
        try {
            const { id } = req.params

            const findPlayerByIdService = new FindPlayerByIdService()
            const player = await findPlayerByIdService.handle(id)

            res.json(player)
        } catch (error) {
            next(error)
        }

    }
}