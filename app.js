const express = require('express')
const routerApi = require('./routers')
const cors = require('cors')

const app = express()
app.use(cors())
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json('Api Facturas V1')
})

routerApi(app)

app.listen(port, () =>{
    console.log('En ejecucion puerto : ' + port)
})
