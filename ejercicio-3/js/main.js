function calcular() {
    let num1 = parseFloat(document.getElementById("primerNum").value);
    let num2 = parseFloat(document.getElementById("segundoNum").value);
    let operacion = document.getElementById("operacion").value;
    let resultado = 0;

    switch (operacion) {
        case "suma":
            resultado = num1 + num2;
            break;
        case "resta":
            resultado = num1 - num2;
            break;
        case "multiplicacion":
            resultado = num1 * num2;
            break;
        case "division":
            resultado = num1 / num2;
            break;
    }

    document.getElementById("resultado").innerText = resultado;
}

document.getElementById('calcular').addEventListener('click', calcular);
