// 1. Load "'http" module 
const http = require('http')

// const requestListener = funtion (req, res) {..}
// function requestListener(req, res) {..}
// OPTION 1
// const requestListener = (req, res) => {
//     res.end('Hello CodeSchool')
// }
// const server = http.createServer(requestListener)

// const onListening = () => {
//     console.log('Server is listening at port 3000')
// }
// server.listen(3000, onListening)// callback => async => non-b] 

// OPTION 2 (Cách rút gọn )
// Create server
// Khi co request den cai web sever nay
// Thi goi call back 'requestListener'

const server = http.createServer( (req, res) => {
    res.end('Hello CodeSchool')
})

// Start sever 
// Khi nao web server duoc start thanh cong
// thi goi callback 'onListening'


server.listen(3000, () => {
    console.log('Server is listening at port 3000')
}) // callback => async => non-blocking

console.log('Het File')



