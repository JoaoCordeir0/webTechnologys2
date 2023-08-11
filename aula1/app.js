// Lendo extensão do arquivo
const path = require('path')
const extension = path.extname('arquivo.pdf')
console.log(extension)

// Lendo conteúdo do arquivo
const fs = require('fs')
fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err)
        console.log(err)
    else 
        console.log(data)
})

// Lendo informação pelo console
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Qual sua idade? ', (idade) => {
    console.log('Minha idade é: ', + idade)
    rl.close()
})
