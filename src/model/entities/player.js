import { sequelize } from "../connection/sequelize.js";
import { STRING, UUID } from "sequelize"

export const Player = sequelize.define('players', {
    id: {
        type: UUID,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: STRING,
        allowNull: false
    }
})
