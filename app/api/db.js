// import getConfig from 'next/config';
import mysql from 'mysql2/promise';
// import { Sequelize } from 'sequelize';

export const db = {
    initialized: false,
    initialize
};


// async function initialize() {

//     const connection = await mysql.createConnection(
//         { 
//             host: 'localhost',
//             port: '3306',
//             user: 'root',
//             password: '!Q2w3e4r',
//             database: 'cabin' 
//         }
//     );
    // connect to db
    // const sequelize = new Sequelize('cabin', 'root', 'Q2w3e4r', { dialect: 'mysql' });
// }