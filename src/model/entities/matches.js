import { DATE, ENUM, INTEGER, STRING, UUID } from "sequelize";
import { sequelize } from "../connection/sequelize.js";
import { Player } from "./player.js";
import { Teams } from "./teams.js";
import { Scores } from "./score.js"

export const Matches = sequelize.define('Matches', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    kindOfMatch: {
        type: ENUM(['solo', 'team']),
        allowNull: false
    },
    gameName: {
        type: STRING,
        allowNull: false
    },
    teamWinnerId: {
        type: INTEGER,
        references: {
            model: Teams,
            key: 'id'
        },
        allowNull: true
    },
    teamLooserId: {
        type: INTEGER,
        references: {
            model: Teams,
            key: 'id'
        },
        allowNull: true
    },
    playerWinnerId: {
        type: UUID,
        references: {
            model: Player,
            key: 'id'
        },
        allowNull: true
    },
    scoreId: {
        type: INTEGER,
        references: {
            model: Scores,
            key: 'id'
        },
        allowNull: true
    },
    createdAt: {
        type: DATE,
        defaultValue: new Date(),
        allowNull: false
    },
})

