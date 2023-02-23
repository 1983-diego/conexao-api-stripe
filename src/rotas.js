const express = require("express")

const rotas = express()

rotas.get('/cliente', clientes.listar)
rotas.post('/cliente', clientes.cadastrar)

rotas.get('/produto', produtos.listar)
rotas.post('/produto', produtos.cadastrar)

rotas.post('/venda', vendas.venda)

module.exports = rotas