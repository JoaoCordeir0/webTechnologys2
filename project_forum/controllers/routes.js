const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const questionModel = require('../database/question')
const anwserModel = require('../database/anwser')

const app = express()

// Lib body-parse
app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json())

// Use EJS with view enginer
app.set('view engine', 'ejs')

// Use 
app.use(express.static('public'))

app.post('/reply/question/:id', (request, response) => {
    let id = request.params.id
    anwserModel.create({
        body: request.body.bodyAnwser,
        questionID: id
    }).then(() => {
        response.redirect('/detailquestion/' + id)
    }).catch((err) =>{
        console.log(err)
    })
})

app.post('/save/question', (request, response) => {   
    questionModel.create({
        title: request.body.title,
        description: request.body.description
    }).then(() => {
        response.redirect('/')
    }).catch((err) =>{
        console.log(err)
    })
})

app.get('/delete/anwser/:id', (request, response) => {
    anwserModel.destroy({
        where: {
            id: request.params.id
        }
    }).then(() => {
        response.redirect('back')
    })
})

app.get('/detail/question/:id', (request, response) => {
    questionModel.findOne({
        raw: true, where: {id: request.params.id}
    }).then(question => {
        if (question != undefined)
        {     
            anwserModel.findAll({
                raw: true, where: {questionID: question.id}
            }).then(anwsers => {
                console.log(anwsers)
                response.render('detailQuestion', {
                    pageTitle: 'Forum - Details Question',
                    question: question,
                    anwsers: anwsers,
                })
            })                   
        }
        else
        {
            response.redirect('/')
        }
    })
})

app.get('/getquestions', (request, response) => {   
    questionModel.findAll( { raw:true, order:[['id', 'DESC']] } ).then((questions => {
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
    questionModel.findAll( { raw:true, order:[['id', 'DESC']] } ).then((questions => {
        let arrayPage = {
            pageTitle: 'Forum - Home',
            questions: questions,
        }            
        response.render('index', arrayPage)    
    }))    
})
 
module.exports = app