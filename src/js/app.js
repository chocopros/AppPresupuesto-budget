const ingresos = [
    new Ingreso('salario',350),
    new Ingreso('servicio tecnico',20)
];

const egresos = [
    new Egreso('Comidas',120),
    new Egreso('Pasajes',16)
];

let loadApp = () => {

    loadBody();
    loadIn();
    loadEg();
    
}

//> GET ALL SUM OF INGRESOS
function totalIngreso() {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso._val;
    }
    return totalIngreso;
}
//? console.log(totalIngreso())

//> GET ALL SUM OF EGRESOS
let totalEgreso = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso._val
    }
    return totalEgreso
}
//? console.log(totalEgreso())


//> LOADING ELEMENT IN THE BODY
let loadBody = () => {
    let presupuesto = (totalIngreso() - totalEgreso())
    let porcentajeEgreso = ((totalEgreso()/totalIngreso()))
    console.log(porcentajeEgreso)
    document.getElementById('presupuesto').innerHTML = formatMoney(presupuesto)
    document.getElementById('mount-ingreso').innerHTML = formatMoney(totalIngreso())
    document.getElementById('mount-egreso').innerHTML = formatMoney(totalEgreso())
    document.getElementById('porcentaje-relation').innerHTML = formatPorcentaje(porcentajeEgreso)
}

//! DEFINE FORMAT TO MOUNT 
const formatMoney = (val) => {
   return val.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}

//! DEFINE FORMAT TO PORCENTAJE
const formatPorcentaje = (val) => {
    return val.toLocaleString('en-US',{style:'percent', minimumFractionDigits:2})
}

//> LOAD INGRESO
const loadIn = () => {
    let ingresosHTML = ""
    for (let ingreso of ingresos){
        ingresosHTML += createInHTML(ingreso);
    }
    document.getElementById('list-in').innerHTML = ingresosHTML;
}

//> CREATE INGRESOS
const createInHTML = (ingreso) =>{
    let inHTML = `
    <li class="details-ope">
        <h2>${ingreso._description}</h2>
            <div id="windows" class="option-move">
                <h2>+ ${formatMoney(ingreso._val)}</h2>
                <button id="opMove" type="button" class="btn-2" onclick="deleteIn(${ingreso._id})">
                    <i class='bx bxs-message-alt-x opMove'></i>
                </button>
            </div>
    </li>`;
    return inHTML
}


//> LOAD EGRESO
const loadEg = () => {
    let egresosHTML = ""
    for (let egreso of egresos){
        //console.log(egreso)
        egresosHTML += createEgHTML(egreso);
    }
    document.getElementById('list-eg').innerHTML = egresosHTML;
}

//> CREATE EGRESO
const createEgHTML = (egreso) => {
    let egHTML = `
    <li class="details-ope">
        <h2>${egreso._description}</h2>
            <div id="windows" class="option-move">
                <h2>- ${formatMoney(egreso._val)}</h2>
                <button id="opMove" type="button" class="btn-2" onclick="deleteEg(${egreso._id})">
                    <i class='bx bxs-message-alt-x opMove'></i>
                </button>
            </div>
    </li>`;
    return egHTML
}


//> CLEANER INPUTS
const cleanerInputs = () => {
    document.getElementById('textDetails').value = ""
    document.getElementById('textMount').value = ""
}


//> ADD NEW ELEMENT >>
const addElement = () =>{
    //console.log('agregando')
    //> GET SELECTED OPTIONS
    let stateSelect = document.getElementById('select-opt')
    let selectOptions = stateSelect.options[stateSelect.selectedIndex].text.trim()
    //console.log(selectOptions)
        
    let textInputoption = document.getElementById('textDetails').value
    let textMountInputOption = document.getElementById('textMount').value
    //console.log(textInputoption,textMountInputOption)

    if (!textInputoption || !textMountInputOption) {
        alert("Inputs NULL: valores requeridos");
    } else {

        if (selectOptions === "+") {
            ingresos.push(new Ingreso (textInputoption,Number(textMountInputOption)))
            loadApp()
        } else {
            egresos.push(new Egreso (textInputoption,Number(textMountInputOption)))
            loadApp()
        }

    }


   cleanerInputs()

}


//! DELETES

//> DELETE INGRESO
const deleteIn = (id) => {
    let indexDelete = ingresos.findIndex(ingreso => ingreso.id === id);
    //console.log(indexDelete)
    ingresos.splice(indexDelete, 1)
    loadBody()
    loadIn()
}
//> DELETE INGRESO
const deleteEg = id => {
    let indexDelete = egresos.findIndex(egreso => egreso.id === id);
    //console.log(indexDelete)
    egresos.splice(indexDelete, 1)
    loadBody()
    loadEg()
}


