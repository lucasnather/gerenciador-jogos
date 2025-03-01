import { INTEGER, STRING, UUID } from "sequelize";
import { sequelize } from "../connection.js";
import { Matches } from "./matches.js";
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
