import { INTEGER, UUID } from "sequelize";
import { sequelize } from "../connection/sequelize.js";
import { Player } from "./player.js";
import { Teams } from "./teams.js";

export const TeamPlayers = sequelize.define('team_players', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    playerId: {
        type: UUID,
        references: {
            model: Player,
            key: 'id'
        }
    },
    teamsId: {
        type: INTEGER,
        references: {
            model: Teams,
            key: 'id'
        }
    },
})

TeamPlayers.hasMany(Player, {
    foreignKey: {
        name: 'id',
    },
    onDelete: 'CASCADE',
    hooks: true
})

TeamPlayers.hasMany(Teams, {
    foreignKey: {
        name: 'id'
    },
    onDelete: 'CASCADE',
    hooks: true
})