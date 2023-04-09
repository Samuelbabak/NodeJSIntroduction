const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('about me')
    }
    res.end(`
        <h1>Error 404 Page not found</h1>
        <a href="/">back home</a>
    `)
    


})

server.listen(5000)