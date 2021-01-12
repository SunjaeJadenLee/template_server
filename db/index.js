const mariadb = require('mariadb');
const env = require('dotenv');

env.config();

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: process.env.PASSWORD,
    database:'template'
})

const conn = async () => {
    let connection = await pool.getConnection();
    // let tables = await connection.query('SHOW TABLES');
    return connection
}

exports.conn = conn()