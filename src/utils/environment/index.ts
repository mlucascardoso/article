import { Dialect } from 'sequelize/types';

require('dotenv-json-complex')();

interface DatabaseEnvironment {
    username: string,
    password: string,
    name: string,
    host: string,
    dialect: Dialect
}

const port = process.env.port || 3000;
const databaseEnv = process.env.database || '';
const nodeEnv = process.env.node_env || 'localhost';

const database: DatabaseEnvironment = JSON.parse(databaseEnv);

export {
    database,
    nodeEnv,
    port
}