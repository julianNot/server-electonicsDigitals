const express = require('express')
const clientsRouter = require('./clients')
const invoicesRouter = require('./invoices')

function routerApi(app){
    const router = express.Router()
    app.use('/api/v1', router)

    router.use('/clients', clientsRouter)
    router.use('/invoices', invoicesRouter)
}

module.exports = routerApi