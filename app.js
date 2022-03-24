const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hola otra vez')
})

app.get('/clients', (req, res) => {
    res.json([
        {
            id : 1,
            name : 'Harry',
            document : '102920'

        },
        {
            id : 2,
            name : 'Mafe',
            document : '102920'

        },
        {
            id : 3,
            name : 'Julian',
            document : '102920'

        },
    ])
})

app.get('/clients/:id', (req, res) => {
    const {id} = req.params
    res.json({
        id,
        name : 'lista clients uwu'
    })
})

app.get('/voices', (req, res) => {
    res.json([
        {
            id : 1,
            name : 'bulls S.A.S'
        },
        {
            id : 2,
            name : 'Copias S.A'
        },
        {
            id : 3,
            name : 'Dell inc'
        },
        {
            id : 4,
            name : 'Uptc'
        },
    ])
})

app.get('/voices/:id',(req, res) => {
    const { id } = req.params
    res.json({
        id : 4,
        name : 'Uptc'
    })
})

app.get('/clients/:clientId/voices/:voiceId', (req, res) => {
    const {clientId, voiceId} = req.params
    res.json({
        clientId,
        voiceId
    })
})

app.listen(port, () =>{
    console.log('En ejecucion puerto : ' + port)
})
