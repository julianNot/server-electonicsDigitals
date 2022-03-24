class InvoicesServices{

    constructor(){
        this.invoices = []
        this.data()
    }

    data(){
        this.invoices.push({
            id: 1,
            client : {
                name : 'julian',
                lastName : 'Ardila',
                document : '201920338',
                numberCell : '30039281',
                address : 'Tunja, Santa ines' 
            },
            business : {
                name : 'GoWorking S.A',
                nit : '10293882',
                address : 'tunja'
            },
            products : [
                {description : 'pc', amount : 3, price : 350000}
            ]
        })
        this.invoices.push({
            id: 2,
            client : {
                name : 'Harrison',
                lastName : 'Diaz',
                numberCell : '31280392',
                document : '201920260',
                address : 'Tunja'
            },
            business : {
                name : 'Valorant S.A',
                nit : '10293882',
                address : 'Barbosa'
            },
            products : [
                {description : 'Escritorio', amount : 2, price : 150000},
                {description : 'Monitor', amount : 1, price : 1250000},
            ]
        })
        this.invoices.push({
            id : 3,
            client : {
                name : 'Mafe',
                lastName : 'Sanchez',
                document : '84083772',
                numberCell : '28132123',
                address : 'Tunja'
            },
            business : {
                name : 'Computech S.A',
                nit : '8493892',
                address : 'Tunja'
            },
            products : [
                {description : 'x-box', amount : 3, price : 1540000},
                {description : 'teclado', amount : 2, price : 200000},
            ]
        })
    }

    create(id, client, business, products){
        this.invoices.push({
            id,
            client : {
                name : client.name,
                lastName : client.lastName,
                document : client.document,
                numberCell : client.numberCell,
                address : client.address 
            },
            business : {
                name : business.name,
                nit : business.nit,
                address : business.address
            },
            products
        })

    }

    findOne(id){
        return this.invoices[id]
    }

    getList(){
        return this.invoices
    }

    updated(){
        
    }

    delete(id){
        this.invoices.splice(id, id+1)
    }

}

module.exports = InvoicesServices