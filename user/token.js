const env = require('dotenv');
env.config();
const jwt = require('jsonwebtoken');

const varifyToken = (req,res,next) => {
    const token = req.header('LOGIN_ACCESS_TOKEN');
    try {
        if(token){
            const decoded = jwt.verify(token,process.env.SECRET_KEY);
            console.log('TOKEN VALID');
            next();

        } else {
            res.status(501).json({message:'TOKEN UNAUTHORIZED'});
        }
    } catch (error) {
        console.log(error)
        res.status(501).json({message:'TOKEN EXPIRED'})
    }
}

module.exports = {
    varifyToken
}