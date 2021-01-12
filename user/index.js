const express = require('express');
const router = express.Router()
const users = require('../db/user/index');
const { varifyToken } = require('./token');

router.get('/',varifyToken , async (req,res)=>{
    console.log(req.query);
    if(Object.keys(req.query).length !== 0){
        console.log(...Object.entries(req.query)[0]);
        let list = await users.searchUser(...Object.entries(req.query)[0])
        res.json(list);
    } else {
        let list = await users.getUserList();
        res.json(list);
    }
});;

router.post('/',varifyToken ,async (req,res)=>{
    let result = await users.addUser(req.body);
    if(result.affectedRows === 1){
        res.json({...result,status:200});
    }
})

router.put('/',varifyToken ,async (req,res)=>{
    let result = await users.editUser(req.body);
    if(result.affectedRows === 1){
        res.json({...result,status:200});
    }
})

router.delete('/',varifyToken ,async (req,res)=>{
    let { userID } = req.query;
    let result = await users.deleteUser(userID);
    if(result.affectedRows === 1){
        res.json({...result,status:200});
    }
})


module.exports = router;