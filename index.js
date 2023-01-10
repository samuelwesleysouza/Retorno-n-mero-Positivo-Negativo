let resultado = document.querySelector('#resultado')
let num = document.querySelector('#numero')
let btncalcular = document.querySelector('#btncalcular')

btncalcular.onclick = function teste() {
    if (numero.value > 0) {
        resultado.innerHTML = "Numeros positivo"
    } else {
        (numero.value < 0)
        resultado.innerHTML = "Numeros negativos"
    }
    if (numero.value == 0) {
        resultado.innerHTML = "Zero numero Neutro"
    } 
}


