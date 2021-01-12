const conn = require('../index');
const { v4 } = require('uuid');
const moment = require('moment')
const jwt = require('jsonwebtoken');

const env = require('dotenv');
env.config();


const loginUser = async (params) => {
    let con = await conn.conn;
    let query = `SELECT * FROM USER WHERE (email = '${params.email}' AND password = '${params.password}') LIMIT 1`
    let result = await con.query(query);

    if(result.length > 0){
        if(result[0].isAdmin !== 'Y') return {message:'NOT ADMIN ACCOUNT',status: 505}
        try {
            const token = jwt.sign({
                userID: result[0].userID,
            },process.env.SECRET_KEY,{
                expiresIn: '2h'
            })
    
            console.log('token::',token);
            // got an user successfully
            const selectLoginQuery = `SELECT userID FROM LOGIN WHERE userID = '${result[0].userID}'`
            const selectLoginResult = await con.query(selectLoginQuery);
            let loginQuery = ''
            if(selectLoginResult.length > 0){
                // UPDATE LOGIN
                loginQuery = `UPDATE LOGIN SET auth_token='${token}', last_login='${moment().format('YYYY/MM/DD hh:mm:ss')}' WHERE userID = '${result[0].userID}'`
            } else {
                // INSERT LOGIN
                loginQuery = `INSERT INTO LOGIN VALUES ('${v4().substring(0, 20).replace('-', '')}','${token}','${result[0].userID}','${moment().format('YYYY/MM/DD hh:mm:ss')}')`
            }
            console.log('query::',loginQuery)
            let loginResult = await con.query(loginQuery);
    
            return {...loginResult,token:token,message:'SUCCESS', status:200} 
        } catch (error) {
            console.log(error);

            return { message : 'FAILED',status:501}
        }
        
    } else {
        return {message:'USER NOT EXIST',status:501}
    }
}

const checkToken = async (token) => {
    var decoded = ''
    try {
        decoded = jwt.verify(token,process.env.SECRET_KEY)
    } catch (error) {
        return {message: 'INVALID KEY', status: 501}
    }
    let con = await conn.conn;
    let query = `SELECT * FROM LOGIN WHERE auth_token='${token}' LIMIT 1`;
    let result = await con.query(query);
    if(result.length > 0){
        // get user from token
        let userQuery = `SELECT * FROM USER WHERE userID='${result[0].userID}'`;
        let userResult = await con.query(userQuery);
        if(userResult.length > 0){
            return {message: 'SUCCESS', status: 200,data: userResult[0]}
        } else {
            return {message:'USER NOT EXIST', status: 503 }
        }
    } else {
        return {message: 'AUTH TOKEN FAILD', status: 502}
    }
}

module.exports = {
    loginUser,
    checkToken
}