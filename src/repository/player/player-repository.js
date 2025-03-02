import { Player } from "../../model/entities/player.js";
import { randomUUID } from "node:crypto"

export class PlayerRepository {

    async post(name) {
        const id = randomUUID()
        const player = Player.build({
            id,
            name
        })

        await player.save()
        return player.toJSON()
    }
}

