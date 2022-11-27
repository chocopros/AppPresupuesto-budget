class Dato {
    constructor(description, val){
        this._description = description;
        this._val = val;
    };

    get description(){
        return this._description;
    }

    set description(newDescription){
        this._description = newDescription;
    }

    get val(){
        return this._val;
    }

    set val(newVal){
        this._val = newVal;
    }
}