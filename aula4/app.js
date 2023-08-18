const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const app = express()

// const checkAuth = (request, response, next) => {
//     request.authStatus = false

//     if (request.authStatus)
//     {
//         console.log('Está logado!')
//         next()
//     }
//     else
//     {
//         console.log('Não está logado!')
//         next()
//     }
// }
// app.use(checkAuth)

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

app.post('/users/save', (request, response) => {    
    console.log(request.body)      
    response.sendFile(basePath + '/usersAdd.html')
})

app.get('/users/add', (request, response) => {    
    response.sendFile(basePath + '/usersAdd.html')
})

app.get('/', (request, response) => {
    response.sendFile(basePath + '/index.html')
})

app.listen('9090', (err) => {
    err ? console.log('Erro') : console.log('Server ON')
})