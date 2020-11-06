import fs from 'fs'
import path from 'path';
import { Sequelize } from 'sequelize';
import config from './config';

const basename = path.basename(__filename);
const db: any = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        dialect: config.dialect,
        logging: config.logging,
        define: {
            timestamps: config.define.timestamps,
            underscored: config.define.underscored,
        }
    }
);

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file !== 'config.ts') && (file.slice(-3) === '.ts');
    })
    .forEach(file => {
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;