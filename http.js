const http = require('http');

const server = http.createServer((req, res)=> {
if(req.url === '/'){
    res.end('This is the homepage!')
}

if (req.url === '/about') {
    res.end('This is the about page')
}

res.end(`
<h1>Ooops!!</h1>
<p>Page not available.</p>
<a href="/">Back To Homepage</a> 
`)
})

server.listen(5000) 