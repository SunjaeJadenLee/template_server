const bcrypt = require('bcrypt');

async function hash(){
    let hash = await bcrypt.hashSync('a',12);
    return hash
}

hash().then(async h=>{
    console.log(h);
    let comp = await bcrypt.compare(h,'$2b$12$f2HE1.KauGG0Xt1DHJCtYufwlNQKZGLFMbvnBxQxFcAvRyjQSBcEO')
    console.log(comp);
})
// console.log(bcrypt.compare(hash(),'$2b$12$ccZiRZUEzxV/rI5KBcKKMuNAA.CGI0svEvJ6PT/B4u8QhujR620eG'))