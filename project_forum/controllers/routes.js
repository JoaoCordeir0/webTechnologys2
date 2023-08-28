const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const questionModel = require('../database/question')

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
    
    questionModel.create({
        title: title,
        description: description
    }).then(() => {
        response.redirect('/')
    }).catch((err) =>{
        console.log(err)
    })
})

app.get('/getquestions', (request, response) => {   
    questionModel.findAll( { raw:true } ).then((questions => {
        response.send(JSON.stringify(questions))        
    }))
})

app.get('/question', (request, response) => {
    let arrayPage = {
        pageTitle: 'Forum - Questions'
    }
    response.render('question', arrayPage)
})

app.get('/', (request, response) => {    
    
    let getQuestions = []
    
    questionModel.findAll( { raw:true } ).then((questions => {
        getQuestions = questions
    }))
    
    let arrayPage = {
        pageTitle: 'Forum - Home',
        questions: getQuestions
    }    
    response.render('index', arrayPage)    
})
 
module.exports = app