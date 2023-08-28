const sequelize = require('sequelize')
const conn = require('./database')

const question = conn.define('question', {
    title: {
        type: sequelize.STRING,
        allowNull: false,
        // primaryKey: true,
        // autoIncrement: true
    },
    description: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

question.sync({force: false}).then(() => {
    console.log('Table created!')
})

module.exports = question