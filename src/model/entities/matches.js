import { DATE, ENUM, INTEGER, STRING, UUID } from "sequelize";
import { sequelize } from "../connection/sequelize.js";
import { Player } from "./player.js";
import { Teams } from "./teams.js";

export const Matches = sequelize.define('matches', {
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
    createdAt: {
        type: DATE,
        defaultValue: new Date(),
        allowNull: false
    },
})

Matches.hasOne(Player, {
    foreignKey: {
        name: 'id'
    },
})


Matches.hasMany(Teams, {
    foreignKey: {
        name: 'id',
    },
})

Matches.belongsTo(Player, {
    foreignKey: 'playerWinnerId',
    as: 'playerWinner'
});

Matches.belongsTo(Teams, {
    foreignKey: 'teamWinnerId',
    as: 'teamWinner'
});

Matches.belongsTo(Teams, {
    foreignKey: 'teamLooserId',
    as: 'teamLooser'
});

