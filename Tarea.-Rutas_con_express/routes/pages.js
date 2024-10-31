const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/principal', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/principal.html'))
});

router.get('/generador', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/generador.html'))
});

router.get('/calculadora', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'))
});


module.exports = router;
