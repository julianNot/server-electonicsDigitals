const clientsRouter = require('./clients')
const invoicesRouter = require('./invoices')

function routerApi(app){
    app.use('/clients', clientsRouter)
    app.use('/invoices', invoicesRouter)
}

module.exports = routerApi