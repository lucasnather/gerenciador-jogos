import { INTEGER, UUID } from "sequelize";
import { sequelize } from "../connection/sequelize.js";
import { Matches } from "./matches.js";
import { Player } from "./player.js";

export const Scores = sequelize.define('scores', {
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
    },
    matchId: {
        type: INTEGER,
        references: {
            model: Matches,
            key: 'id'
        }
    }
})
