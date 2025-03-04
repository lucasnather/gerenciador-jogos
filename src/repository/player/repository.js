import { Player } from "../../model/entities/player.js";
import { randomUUID } from "node:crypto"

export class PlayerRepository {

    async create(name) {
        const id = randomUUID()
        const player = Player.build({
            id,
            name
        })

        await player.save()
        return player.toJSON()
    }

    async findById(id) {
        const player = await Player.findOne({
            where: {
                id
            }
        })

        if(!player) return null

        return player.toJSON()
    }

    async remove(id) {
        await Player.destroy({
            where: {
                id
            },
            cascade: true,
            truncate: true
        })
    }
}

