const express = require('express')

const app = express()

// Routes
app.get('/calc/:param1/:op/:param2', (request, response) => {
    
    let v1 = parseInt(request.params.param1)
    let v2 = parseInt(request.params.param2)
    let op = request.params.op
    let result = 0

    switch(op){
        case '-': result = v1 - v2; break;
        case '+': result = v1 + v2; break;
        case '*': result = v1 * v2; break;
        case '_': result = v1 / v2; break;
    }
    
    response.send('<h1>' + v1 + ' ' + op + ' ' + v2 + ' = ' + result + '</h1>')
})

app.get('/user/:nome?', (request, response) => {
    response.send('Nome: ' + request.params.nome)
})

app.get('/', (request, response) => {
    response.send('Hello world!')
})

app.listen(9191, (err) => {
    err ? console.log('Erro!') : console.log('Servidor online na porta 9191')
})