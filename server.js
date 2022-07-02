const http = require("http")  //módulo nativo http
const port = 3000;             //porta escolhida;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag sobre editora',
    '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})