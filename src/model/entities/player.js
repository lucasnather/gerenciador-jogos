import { sequelize } from "../connection.js";
import { STRING, UUID } from "sequelize"

export const Player = sequelize.define('Player', {
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