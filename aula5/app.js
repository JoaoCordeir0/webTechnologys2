const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'templates')

const app = express()

// Use EJS with view enginer
app.set('view engine', 'ejs')

// Use 
app.use(express.static('public'))

app.get('/', (request, response) => {

    let products = [
        { nome: 'Mouse', price: 150 },
        { nome: 'Keyboard', price: 240 },
        { nome: 'Monitor', price: 1400 },
    ]

    let pageInfo = {
        name: 'Cordeiro',
        company: 'UNIFAE',
        msg: true,
        products: products,
    }

    response.render('index', pageInfo)
})

app.listen('9090', (err) => {
    err ? console.log('Error') : console.log('Server on in port 9090')
})