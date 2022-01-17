const http = require('http')
const fs = require('fs')
const path = require('path')
const {host, PORT} = require('./config.js')


const server = http.createServer((req,res) => {
    if(req.url== '/' && req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(
            fs.readFileSync(path.join(__dirname, 'views', 'index.html'))
        )
        res.end()
    }
})


server.listen(PORT, () => {
    console.log(`backend http://${host}:${PORT}`);
})