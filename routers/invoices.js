const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
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

router.get('/:id',(req, res) => {
    const { id } = req.params
    res.json({
        id : 4,
        name : 'Uptc'
    })
})

router.post('/',(req, res) => {
    const body = req.body
    res.json({
        message : 'creado',
        body
    })
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const body = req.body
    res.json({
        message : 'Actualizado',
        body,
        id

    }) 
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    res.json({
        message : 'borrado',
        id

    }) 
})


module.exports = router