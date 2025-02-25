import 'dotenv/config'
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE, 
    process.env.POSTGRES_USERNAME, 
    process.env.POSTGRES_PASSWORD,
{
    dialect: 'postgres',
    port: process.env.POSTGRES_PORT,
})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }