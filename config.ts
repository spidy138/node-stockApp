require('dotenv').config();
import { Options, Sequelize } from "sequelize";

// const databaseConfig:{[key:string]:Options} = {
//   development: {
    // database: process.env.DB_NAME || 'your_database_name',
    // username: process.env.DB_USERNAME || 'your_username',
    // password: process.env.DB_PASSWORD || 'your_password',
    // host: process.env.DB_HOST || 'localhost',
    // dialect: 'postgres',
//   },
// };
const sequelize=new Sequelize({
  database: process.env.DB_NAME || 'postgresdb',
  username: process.env.DB_USERNAME || 'admin',
  password: process.env.DB_PASSWORD || 'admin123',
  host: process.env.DB_HOST || 'postgres.default',
  dialect: 'postgres',
})

export default sequelize