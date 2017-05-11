export class GenericService {
    constructor(db) {
        this.db = db;
    }

    getMappedItems(){
        return this.db.getItems(() => {}).map((item) => item + ' map value added');
    }

    getItems(){
        throw 'Not implemented yet';
    }
}