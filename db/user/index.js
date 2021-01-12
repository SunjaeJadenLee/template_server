const conn = require('../index');
const { v4 } = require('uuid');
const moment = require('moment');

const getUserList = async () => {
    let con = await conn.conn;
    let list = await con.query('SELECT * FROM USER')

    return list
}

const addUser = async (params) => {
    let con = await conn.conn;
    let {email,name,birth,mobile,isAdmin} = params;
    let date = moment().format('YYYY/MM/DD hh:mm:ss')
    params.userID = v4().substring(0,10).replace('-','');
    params.created_date = date;
    params.updated_date = date;
    try {
        let query = `INSERT INTO USER VALUES ('${params.userID}','${email}','${name}','${birth}','${mobile}','${isAdmin}','${date}','${date}')`
        let result = await con.query(query)
        return {...result,data:{
            userID:params.userID,
            email:email,
            name:name,
            birth:birth,
            mobile:mobile,
            isAdmin:isAdmin,
            created_date:date,
            updated_date:date
        }};
    } catch (error) {
        console.log(error);  
    }
}

const editUser = async (params) => {
    let con = await conn.conn;
    let {email,name,birth,mobile,isAdmin,userID} = params;
    let date = moment().format('YYYY/MM/DD hh:mm:ss');
    params.updated_date = date;
    try {
        let query = `UPDATE USER SET email='${email}',name='${name}',
        mobile='${mobile}',isAdmin='${isAdmin}',birth='${birth}',updated_date='${params.updated_date}' WHERE userID = '${userID}'`
        let result = await con.query(query);
        let selectQuery = `SELECT * from USER WHERE userID = '${userID}'`
        let select = await con.query(selectQuery);
        return {...result,data:select};
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (userID) => {
    let con = await conn.conn;
    let query = `DELETE FROM USER WHERE userID = '${userID}'`
    try {
        let result = await con.query(query);
        console.log(result);
        return { ...result, message: 'SUCCEESS' }
    } catch (error) {
        console.log(error)
    }
}

const searchUser = async (key,value) => {
    let con = await conn.conn;
    console.log(key,value)
    let list = await con.query(`SELECT * FROM USER WHERE ${key} LIKE '%${value}%'`)

    return list
}

exports.getUserList = getUserList;
exports.addUser = addUser;
exports.editUser = editUser;
exports.deleteUser = deleteUser;
exports.searchUser = searchUser;