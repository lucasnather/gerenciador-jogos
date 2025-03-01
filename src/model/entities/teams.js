import { DATE, ENUM, INTEGER } from "sequelize";
import { sequelize } from "../connection.js";

export const Teams = sequelize.define('Teams', {
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