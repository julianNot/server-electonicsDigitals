const express = require('express')

const InvoicesServices = require('./../services/invoices.service')

const router = express.Router()
const service = new InvoicesServices()

router.get('/', (req, res) => {
    const invoicesList = service.getList()
    res.status(200).json(invoicesList)
})

router.get('/:id',(req, res) => {
    const { id } = req.params
    const invoice = service.findOne(id)
    res.status(200).json(invoice)
})

router.post('/',(req, res) => {
    const {id, client, business, products} = req.body
    const invoice = service.create(id, client, business, products)
    res.status(201).json(invoice)
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
    const invoice = service.delete(id)
    res.status(200).json(invoice) 
})


module.exports = router