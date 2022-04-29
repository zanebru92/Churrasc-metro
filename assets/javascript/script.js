/* 

carne 400g + de 6h 600g
cerveja 1200ml + de 6h 2000ml
refrigerante/agua 1000ml + de 6h 2000ml

crianças valem por 0,5

*/

let inputAdultos = document.querySelector('#adultos')
let inputKids = document.querySelector('#kids')
let inputTime = document.querySelector('#time')

let result = document.querySelector('#results')

document.querySelector('#calc').addEventListener('click', ()=> {

    let adultos = inputAdultos.value;
    let kids = inputKids.value;
    let time = inputTime.value;
    let qtdeTotalCarne = adultos * carnePP(time) + (carnePP(time) / 2 * kids);
    let qtdeTotalCeva = adultos * cervejaPP(time)
    let qtdeTotalRefri = adultos * refriPP(time) + (refriPP(time) / 2 * kids) ;  

    result.innerHTML = `<p>${qtdeTotalCarne/1000} kg de Carne</p><p>${Math.round(qtdeTotalCeva)} litros de Cerveja</p><p>${Math.round(qtdeTotalRefri)} litros de Refrigerante/Água</p>`;
    
})

function carnePP(time) {
    if(time >=6){
        return 650;
    }
    else {
        return 500;
    }
}

function cervejaPP(time) {
    if(time >=6){
        return 2;
    }
    else {
        return 1.2;
    }
}
function refriPP(time) {
    if(time >=6){
        return 2;
    }
    else {
        return 1;
    }
}



