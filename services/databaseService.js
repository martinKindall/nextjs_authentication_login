const databaseService = () => {
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
    const table = 'lenguajes';

    const getLenguages = () => {
        return knex(table).select();
    };

    const crearLenguaje = (nombre, lanzamiento, tipado_estatico) => {
        return knex(table).insert({
            nombre: nombre,
            lanzamiento: lanzamiento,
            tipado_estatico: tipado_estatico
        });
    };

    return {crearLenguaje, getLenguages};
};

module.exports = {
    databaseService
};