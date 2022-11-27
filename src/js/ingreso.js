class Ingreso extends Dato{
    static countIngresos = 0;

    constructor(description, val){
        super(description, val);
        this._id = ++Ingreso.countIngresos;
    }

    get id(){
        return this._id;
    }
}