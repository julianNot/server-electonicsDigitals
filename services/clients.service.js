class ClientsServices{

    constructor(){
        this.clients = []
        this.data()
    }

    data(){
        this.clients.push({
            id: 1,
            name : 'julian',
            lastName : 'Ardila',
            document : '201920338',
            numberCell : '30039281',
            address : 'Tunja, Santa ines'
        })
        this.clients.push({
            id : 2,
            name : 'Harrison',
            lastName : 'Diaz',
            document : '201920260',
            numberCell : '31280392',
            address : 'Tunja'
        })
        this.clients.push({
            id : 2,
            name : 'Mafe',
            lastName : 'Sanchez',
            document : '84083772',
            numberCell : '28132123',
            address : 'Tunja'
        })
    }

    create(id, name, lastName, document, numberCell, address){
        this.clients.push({
            id,
            name,
            lastName,
            document,
            numberCell,
            address
        })

    }

    findOne(){

    }

    getList(){
        return this.clients
    }

    updated(){
        
    }

    delete(){

    }
}

module.exports = ClientsServices