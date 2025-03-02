import { FindPlayerByIdService } from "../../service/player/find-player-by-id-service.js"

export class FindPlayerByIdController {

    async get(req, res) {
        try {
            const { id } = req.params

            const findPlayerByIdService = new FindPlayerByIdService()
            const player = await findPlayerByIdService.handle(id)

            res.json(player)
        } catch (error) {
            res.json({
                message: "Server Internal Error"
            })
        }

    }
}