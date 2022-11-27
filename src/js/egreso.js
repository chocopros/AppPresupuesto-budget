class Egreso extends Dato{
    static countEgresos = 0;

    constructor(description, val){
        super(description, val);
        this._id = ++Egreso.countEgresos;
    }

    get id(){
        return this._id;
    }
}