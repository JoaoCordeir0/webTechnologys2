const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, 'templates')
const bodyParser = require('body-parser')

const app = express()

// Lib body-parse
app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json())

// Use EJS with view enginer
app.set('view engine', 'ejs')

// Use 
app.use(express.static('public'))

app.post('/savequestion', (request, response) => {   
    let title = request.body.title
    let description = request.body.description

    response.send('Form received! <br> ' + title)
})

app.get('/question', (request, response) => {
    let arrayPage = {
        pageTitle: 'Forum - Questions'
    }
    response.render('question', arrayPage)
})

app.get('/', (request, response) => {    
    let arrayPage = {
        pageTitle: 'Forum - Home'
    }
    response.render('index', arrayPage)    
})

app.listen('9090', (err) => {
    err ? console.log('Error') : console.log('Server on in port 9090')
})