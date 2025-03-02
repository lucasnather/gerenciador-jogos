import { CreatePlayerService } from "../../service/player/create-player-service.js"

export class CreatePlayerController {

    async post(req, res, next) {
        try {
            const { name } = req.body

            const createPlayerService = new CreatePlayerService()
            const player = await createPlayerService.handle(name)

            res.json(player)
        } catch (error) {
            next(error)
        }

    }
}