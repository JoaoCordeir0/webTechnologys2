const sequelize = require('sequelize')
const connection = require('./database')

const anwser = connection.define('anwser', {
    body: {
        type: sequelize.STRING,
        allowNull: false,        
    },
    questionID: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

anwser.sync({force: false}).then(() => {
    console.log('Table created!')
})

module.exports = anwser