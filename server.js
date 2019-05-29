const http = require('http'); //estou requerendo o módulo
const utf8 = require('utf8');

const server = http.createServer(function (request, response) {  //função que mora dentro do http modules, ela recebe requisições e também dá respostas
    if (request.url === '/') {
        response.end('Hello World'); //mostra pro usuario
    } else if (request.url === '/comidas') {
        // response.end('comidinhas show'); não vai entrar nesse response, vai no get direto
        if (request.method === 'GET') {
            response.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8" //avisando que ele consegue receber/ler um arquivo text/html
            })
            response.end('<h1>Tem get não</h1>');
        } else if (request.method === 'POST') {
            response.writeHead(201, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end('<h1>Tem post não</h1>');
        }
    }
})

server.listen(3000)
console.log('servidorzinho rodando na porta 3000'); //mostra no terminal