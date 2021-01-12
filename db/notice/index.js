const conn = require('../index');
const { v4 } = require('uuid');
const moment = require('moment');

const getNoticeList = async () => {
    let con = await conn.conn;
    let list = await con.query('SELECT * FROM NOTICE')

    return list
}

const addNotie = async (params) =>{
    let {title,userID,content} = params;
    let con = await conn.conn;
    let date = moment().format('YYYY/MM/DD hh:mm:ss');
    params.noticeID = v4().substring(0,12).replace('-','');
    params.created_date = date;
    params.updated_date = date;
    try {
        let query = `INSERT INTO NOTICE VALUES ('${params.noticeID}','${title}','${content}','${userID}',${0},${0},'${date}','${date}')`
        let result = await con.query(query)
        return {...result,data:{
            noticeID:params.noticeID,
            title,
            content,
            userID,
            like:0,
            dislike:0,
            created_date:date,
            updated_date:date
        }};
    } catch (error) {
        console.log(error);  
    }
}

const editNotice = async (params) => {
    let con = await conn.conn;
    let {title, content, userID, noticeID} = params;
    let date = moment().format('YYYY/MM/DD hh:mm:ss');
    params.updated_date = date;
    try {
        let query = `UPDATE NOTICE SET TITLE='${title}',CONTENT='${content}', updated_date='${params.updated_date}' WHERE noticeID = '${noticeID}'`
        let result = await con.query(query);
        let selectQuery = `SELECT * from NOTICE WHERE noticeID = '${noticeID}'`
        let select = await con.query(selectQuery);
        return {...result,data:select};
    } catch (error) {
        console.log(error);
    }
}

const searchNotice = async (key,value) => {
    let con = await conn.conn;
    console.log(key,value)
    let list = await con.query(`SELECT * FROM NOTICE WHERE ${key} LIKE '%${value}%'`)

    return list
}

module.exports = {
    getNoticeList,
    addNotie,
    editNotice,
    searchNotice
}