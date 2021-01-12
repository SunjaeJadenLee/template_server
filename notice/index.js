const express = require('express');
const router = express.Router()
const users = require('../db/user/index');
const notice = require('../db/notice/index');
const {getNoticeList, editNotice, searchNotice} = require('../db/notice/index')
const { varifyToken } = require('../user/token');

router.get('/',varifyToken, async (req,res)=>{
    if(Object.keys(req.query).length !== 0){
        console.log(...Object.entries(req.query)[0]);
        let list = await searchNotice(...Object.entries(req.query)[0])
        res.json(list);
    } else {
        let list = await getNoticeList();
        res.status(200).json(list);
    }
})

router.post('/',varifyToken, async (req,res)=>{
    let result = await notice.addNotie(req.body);
    if(result.affectedRows === 1){
        res.status(200).json({...result,status:200});
    } else {
        res.status(401).json({message: 'UPLOAD FAILED'})
    }
})

router.put('/',varifyToken ,async (req,res)=>{
    let result = await editNotice(req.body);
    if(result.affectedRows === 1){
        res.json({...result,status:200});
    } else {
        res.status(result.status).json({message:'EDIT FAILED'})
    }
})

module.exports = router;