const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido a mi primer servidor con express");
});

app.get("/pagina", (req, res) => {
    res.send(`
            <style> 
                h1{
                    color: red
                }
            </style>
            <h1>Mi Página </h1>
            <p> Creada con Express</p>
        `)
})

app.get ("/saludo/:nombre", (req, res) => {
    const nombre = req.params.nombre;
    res.send("Hola " + nombre);
})

// Ejercicio 1: PAR / IMPAR
app.get("/par/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    if (numero % 2 === 0) {
        res.send(`${numero} es un número par.`);
    } else {
        res.send(`${numero} es un número impar.`);
    }
});

// Ejercicio 2: MAYOR DE EDAD
app.get("/edad/:edad", (req, res) => {
    const edad = Number(req.params.edad);
    if (edad < 18) {
        res.send("Eres menor de edad");
    } else {
        res.send("Eres mayor de edad");
    }
});

// Ejercicio 3: CALCULADORA
app.get("/calculadora/:operacion/:a/:b", (req, res) => {
    const operacion = req.params.operacion.toLowerCase();
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    if (isNaN(a) || isNaN(b)) {
        return res.send("Introduce números válidos");
    }

    switch (operacion) {
        case "suma":
            res.send(`Resultado: ${a + b}`);
            break;
        case "resta":
            res.send(`Resultado: ${a - b}`);
            break;
        case "multiplicacion":
            res.send(`Resultado: ${a * b}`);
            break;
        case "division":
            if (b === 0) {
                res.send("No se puede dividir entre cero");
            } else {
                res.send(`Resultado: ${a / b}`);
            }
            break;
        default:
            res.send("Operación no válida. Usa: suma, resta, multiplicacion o division.");
            break;
    }
});

// Ejercicio 4: TABLA DE MULTIPLICAR
app.get("/tabla/:numero", (req, res) => {
    const numero = Number(req.params.numero);
    let resultadoHTML = `<h2>Tabla del ${numero}</h2>`;

    for (let i = 1; i <= 10; i++) {
        resultadoHTML += `${numero} * ${i} = ${numero * i}<br>`;
    }

    res.send(resultadoHTML);
});

// Ejercicio 5: CALIFICACIÓN
app.get("/calificacion/:nota", (req, res) => {
    const nota = Number(req.params.nota);

    if (isNaN(nota)) {
        return res.send("Por favor introduce una calificación válida.");
    }

    if (nota >= 90) {
        res.send("Excelente");
    } else if (nota >= 80) {
        res.send("Muy bien");
    } else if (nota >= 70) {
        res.send("Aprobado");
    } else {
        res.send("Reprobado");
    }
});

app.listen(PORT, () => {
    console.log("Servidor iniciado en http://localhost:" + PORT);
});