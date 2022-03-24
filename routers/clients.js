const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    const {id} = req.params
    res.json({
        id,
        name : 'lista clients uwu'
    })
})

module.exports = router