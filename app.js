//const http = require('http');
const express = require('express');
const authRouter = require('./routes/auth');
const server = express()
    /*const RutaAdmin = express

    app.get('/', (req, res, next) => {
        res.sendFile(__dirname + "/views/index.html")
    })*/

server.use("/auth", authRouter);

server.get("/", (req, res) => {
    res.send("Index")
})




/*
RutaAdmin.get("/", (req, res) => {

})*/

server.listen(8080);