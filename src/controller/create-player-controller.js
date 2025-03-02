import { CreatePlayerService } from "../service/create-player-service.js"

export class CreatePlayerController {

    async post(req, res) {
        try {
            const { name } = req.body

            const createPlayerService = new CreatePlayerService()
            const player = await createPlayerService.handle(name)

            res.json(player)
        } catch (error) {
            res.json({
                message: "Server Internal Error"
            })
        }

    }
}