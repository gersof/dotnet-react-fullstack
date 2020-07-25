function onclickSumar() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    sumar(num1, num2);
}

function sumar(num1, num2) {
    let resultado = num1 + num2;
    document.getElementById("resultado_suma").innerHTML = "El resultado de la suma es " + resultado;
    alert("El resultado es: " + resultado);
}