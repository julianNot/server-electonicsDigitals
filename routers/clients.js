const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json([
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

router.get('/:id', (req, res) => {
    const {id} = req.params
    res.status(200).json({
        id,
        name : 'lista clients uwu'
    })
})

router.post('/', (req, res) => {
    const body = req.body
    res.status(201).json({
        message : 'created',
        data : body
    })
})

router.patch('/:id', (req, res) => {
    const {id} = req.params
    const body = req.body
    res.json({
        message : "actulizado",
        data : body,
        id
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    res.json({
        message : "deleted",
        id
    })
})
module.exports = router