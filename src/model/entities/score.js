import { INTEGER, UUID } from "sequelize";
import { sequelize } from "../connection/sequelize.js";
import { Player } from "./player.js";

export const Scores = sequelize.define('Scores', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    score: {
        type: INTEGER,
        allowNull: false,
    },
    playerId: {
        type: UUID,
        references: {
            model: Player,
            key: 'id'
        },
        allowNull: false
    }
})
