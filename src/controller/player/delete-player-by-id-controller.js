import { DeletePlayerByIdService } from "../../service/player/delete-player-by-id-service.js"

export class DeletePlayerByIdController {

    async remove(req, res, next) {
        try {
            const { id } = req.params

            const deletePlayerByIdService = new DeletePlayerByIdService()
            const player = await deletePlayerByIdService.handle(id)

            res.json(player)
        } catch (error) {
            next(error)
        }

    }
}