const http = require('http')

// Event-driven style

// OPTION 1

// const server = http.createServer()

// server.on('request', (req, res) => {
//     res.end('Hello CodeSchool')
// })

// server.on('listening', () => {
//     console.log('Server is listening at port 3000')
// })

// server.listen(3000) 

// OPTION 2
// Call chaining => Goi lien tu ti

http
    .createServer()
    .on('request', (req, res) => {
        res.end('Hello CodeSchool')
    })
    .on('listening', () => {
        console.log('Server is listening at port 3000')
    })
    .listen(3000) 




