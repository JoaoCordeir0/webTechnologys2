var http = require('http')

http.createServer(
    function(request, response){
        response.end('Bem vindo ao NodeJS')
    }
).listen(8080)
