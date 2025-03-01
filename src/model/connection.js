import 'dotenv/config'
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE, 
    process.env.POSTGRES_USERNAME, 
    process.env.POSTGRES_PASSWORD,
{
    dialect: 'postgres',
    port: process.env.POSTGRES_PORT,
})

