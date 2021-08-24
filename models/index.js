const { Sequelize } = require('sequelize');
let { dbConfig } = require('../configs');

let { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME } = dbConfig;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    // Sync the models with database
    await sequelize.sync();
}

// Import Models
let User = require('./user.model')(sequelize);
let Token = require('./Token.model')(sequelize);

// User and Token have a "One to many" Relation. That is, each user can have more than one token present in the database.
User.hasMany(Token, {
    foreignKey: 'userId',
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
});
Token.belongsTo(User, { foreignKey: 'userId' });

testConnection();

module.exports = {
    User,
    Token
};

