import app from './src/app.js'

const port = process.env.PORT || 3000;             //porta escolhida;



app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})