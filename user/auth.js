const express = require('express');
const router = express.Router();

const {loginUser,checkToken} = require('../db/auth/index');

router.post('/login',async (req,res)=>{
    
    let result = await loginUser(req.body);
    console.log(result);
    if(result.status){
        res.status(result.status)
    }
    if(result.message === 'SUCCESS'){
        res.json({message:'success',data:result});
    }
})

router.get('/token',async (req,res)=>{
    let token = req.header("LOGIN_ACCESS_TOKEN");
    console.log(req.header("LOGIN_ACCESS_TOKEN"));
    if(token){
        let result = await checkToken(token);
        console.log(result);
        if(result.status){
            res.status(result.status);
        } else {
            res.status(200)
        }
        res.json({...result,message:'AUTH TOKEN SUCCESS'})
    } else {
        res.status(501);
        res.send({message:'AUTH TOKEN NOT RECEIVED'})
    }
})


module.exports = router;