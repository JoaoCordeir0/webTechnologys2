const express = require('express')

const app = express()

// App Routes 
app.get('/', (request, response) => {
    response.send('Ola mundo cruel')
})
app.get('/client/list', (request, response) => {
    let cli = {
        1: 'João Victor Cordeiro',
        2: 'Henrique Munholi',
        3: 'Lucas Gabarito'
    }    
    response.send(cli)
})
app.get('/client/register', (request, response) => {   
    response.send('Registro de clientes')
})
app.get('/client/param/:nome', (request, response) => {   
    response.send('Cliente nome: ' + request.params.nome)
})

// Start on server
app.listen(8080, function(err){
    err ? console.log("Erro!") : console.log("Sucesso!")
})