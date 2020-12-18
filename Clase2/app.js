const http = require('http');
//const hola = require('../Codigo_Tercero/app2');

const server = http.createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" })
    res.write('Hola KENN Bonita')
    res.end();
})

//const server = http.createServer(callback)


//function callback(req, res) {

//}
server.listen(8080);