/*
function aleatorio() {
    let n1 = Math.floor(Math.random() * 100)+1

    let n2 = Math.floor(Math.random() * 100)+1


    if(n1 == n2){
    console.log("Los números son iguales")
    } else if (n1 > n2){
    console.log("El número n1: " +n1 + "es mayor")
    } else {
    console.log("El número n2: " +n2 + "es mayor")
    }

    console.log(n1)
    console.log(n2)
}

aleatorio()
*/

/*
function programaContinuo() {
    let n = -1;
    while (n != 0) {
        n = Math.floor(Math.random() * 6);
        console.log(n);
    }
}
programaContinuo();
*/

/*
function ejercicio3() {
    let numero = Math.floor(Math.random() * 9) + 2;
    console.log("Número generado: " + numero);
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
}
ejercicio3();
*/

/*
function ejercicio4() {
    let pares = 0;
    let impares = 0;
    for (let i = 1; i <= 10; i++) {
        let n = parseInt(prompt("Ingresa un número entre 1 y 100"));
        while (n < 1 || n > 100) {

            n = parseInt(prompt("Número inválido. Ingresa un número entre 1 y 100"));

        }
        if (n % 2 == 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log("Pares: " + pares);
    console.log("Impares: " + impares);
}
ejercicio4();
*/

function ejercicio5() {
    let venta = parseFloat(prompt("Ingrese el monto de ventas (5000 - 30000)"));
    while (venta < 5000 || venta > 30000) {
        venta = parseFloat(prompt("Dato inválido. Ingrese un monto entre 5000 y 30000"));
    }
    let comision;
    if (venta < 10000) {
        comision = venta * 0.10;
    } else {
        comision = venta * 0.15;
    }
    console.log("Ventas: $" + venta);
    console.log("Comisión: $" + comision);
}
ejercicio5();