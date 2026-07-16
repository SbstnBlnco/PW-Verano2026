/*
function potencia(base, exponente) {

    let resultado = 1;

    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
    }

    return resultado;
}

let base = parseInt(prompt("Ingrese la base"));
let exponente = parseInt(prompt("Ingrese el exponente"));

let resultado = potencia(base, exponente);

console.log(base + " elevado a " + exponente + " es " + resultado);

*/

/*
function cajero() {
    let saldo = 5000;
    let opcion;
    do {
        opcion = parseInt(prompt(
            "CAJERO\n\n" +
            "1. Consultar saldo\n" +
            "2. Depositar\n" +
            "3. Retirar\n" +
            "4. Salir"
        ));
        switch (opcion) {
            case 1:
                console.log("Saldo disponible: $" + saldo);
                break;
            case 2:
                let deposito = parseFloat(prompt("Cantidad a depositar"));
                if (deposito > 0) {
                    saldo += deposito;
                    console.log("Nuevo saldo: $" + saldo);
                }
                break;
            case 3:
                let retiro = parseFloat(prompt("Cantidad a retirar"));
                if (retiro > saldo) {
                    console.log("Fondos insuficientes");
                } else if (retiro > 0) {
                    saldo -= retiro;
                    console.log("Retiro realizado");
                    console.log("Saldo: $" + saldo);
                }
                break;
            case 4:
                console.log("Gracias por usar el cajero");
                break;
            default:
                console.log("Opción inválida");
        }
    } while (opcion != 4);
}
cajero();
*/

/*
function juegoDados() {
    let dado1;
    let dado2;
    let lanzamientos = 0;
    do {
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        lanzamientos++;
        console.log(dado1 + " - " + dado2);
    } while (dado1 != dado2);
    console.log("Se necesitaron " + lanzamientos + " lanzamientos.");
}
juegoDados();
*/

/*
function adivinarNumero() {
    let numero = Math.floor(Math.random() * 100) + 1;
    let intento;
    let acerto = false;
    for (let i = 1; i <= 7; i++) {
        intento = parseInt(prompt("Intento " + i + ": Ingresa un número"));
        if (intento == numero) {
            console.log("¡Correcto!");
            acerto = true;
            break;
        } else if (intento < numero) {
            console.log("Más grande");
        } else {
            console.log("Más pequeño");
        }
    }
    if (!acerto) {
        console.log("Perdiste. El número era: " + numero);
    }
}
adivinarNumero();
*/


function registroVentas() {
    let ventas = [];
    let continuar = "S";
    while (continuar.toUpperCase() == "S") {
        let vendedor = prompt("Nombre del vendedor");
        let producto = prompt("Nombre del producto");
        let cantidad = parseInt(prompt("Cantidad vendida"));
        let precio = parseFloat(prompt("Precio unitario"));

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        });

        continuar = prompt("¿Desea registrar otra venta? (S/N)");
    }

    console.log("Total de ventas realizadas: " + ventas.length);

    let totalIngresos = ventas.reduce(function(total, venta) {
        return total + (venta.cantidad * venta.precio);
    }, 0);

    console.log("Total de ingresos: $" + totalIngresos);
    let productos = {};
    ventas.forEach(function(venta) {
        if (productos[venta.producto]) {
            productos[venta.producto] += venta.cantidad;
        } else {
            productos[venta.producto] = venta.cantidad;
        }
    });
    console.log("Unidades vendidas por producto:");
    for (let producto in productos) {
        console.log(producto + ": " + productos[producto] + " unidades");
    }
    let vendedores = {};
    ventas.forEach(function(venta) {
        let total = venta.cantidad * venta.precio;
        if (vendedores[venta.vendedor]) {
            vendedores[venta.vendedor] += total;
        } else {
            vendedores[venta.vendedor] = total;
        }
    });
    let mejorVendedor = "";
    let mayorVenta = 0;
    for (let nombre in vendedores) {
        if (vendedores[nombre] > mayorVenta) {
            mayorVenta = vendedores[nombre];
            mejorVendedor = nombre;
        }
    }
    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + mayorVenta + ")");
}
registroVentas();

