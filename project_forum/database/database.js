const Sequelize = require('sequelize') 

const conn = new Sequelize('forum', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

// Authenticate with database
conn.authenticate().then(() => {
    console.log('Connected!')
}).catch((err) => {
    console.log(err)
})

module.exports = conn