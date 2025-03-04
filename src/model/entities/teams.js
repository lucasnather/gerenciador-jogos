import { DATE, ENUM, INTEGER } from "sequelize";
import { sequelize } from "../connection/sequelize.js";

export const Teams = sequelize.define('teams', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: ENUM(['roxa', 'amarela']),
        allowNull: false
    },
    createdAt: {
        type: DATE,
        defaultValue: new Date(),
        allowNull: false
    }
})