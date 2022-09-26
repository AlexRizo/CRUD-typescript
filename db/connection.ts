import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', '78204991+?-', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;