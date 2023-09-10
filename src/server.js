const express = require("express")

const routes = require("./routes")

const app = express()
app.use(express.json())

app.use(routes)

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

/*app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params
  response.send(`
    Mensagem ID: ${id}.
    Para o usuário: ${user}.
    `)
})*/
