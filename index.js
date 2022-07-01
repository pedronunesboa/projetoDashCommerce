// Develop a web service that uses REST technology. Host this service on any server of your choice (Heroku, amazon, etc).
// You are free to use PHP or Javascript.
// This web service must wait for a GET request, using the following username and password as parameters of the request:

// importacoes das bibliotecas necessárias
const express = require('express')
const app = express()
const URL = require('url')

const port = process.env.PORT || 3000
// endpoint de introducao ao teste
app.get('/', function (req, res) {
  res.send('Hello, Welcome to the test progamming of DashCommerce!')
})

// endpoint para execucao do código recebendo os parametros via url
app.get('/dashcommercetest', function (req, res) {
  const { user, password } = URL.parse(req.url, true).query

  // laco de indetificacao e comparacao dos parametros
  if (user && password) {
    if (user == 'dashcommerce' && password == 'chooseMe') {
      const awnser = 'My full name is Pedro Henrique Nunes. I want this Job'
      console.log('sucesso')
      return res.status(200).json(awnser)
    } else {
      const message =
        'Wrong credentials or the request do not have parameters, try again!'
      console.log('erro')
      return res.status(200).json(message)
    }
  }
})

app.listen(port, () => {
  console.info(`Aplication running at http://localhost:${port}`)
})
