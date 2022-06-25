const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : process.env.DB_HOST,
        port : 3306,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB,
    }
});

const databaseServiceFactory = () => {
    const TABLE = 'users';

    const getUser = async (username) => {
        const user = await knex(TABLE).select().where('username', username);
        if (user.length === 0) {
            throw new Error("User not found");
        } 
        return user[0];
    };

    return {getUser};
};

module.exports = {
    databaseServiceFactory
};