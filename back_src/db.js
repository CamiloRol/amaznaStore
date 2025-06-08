import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('amanzastore', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;