
function calcularPrecio() {
    const input1 = document.getElementById("cantidad");
    const numero = input1.value;
    const numero1 = Number(numero);

    const input2 = document.getElementById("iva");
    const numeroIva = input2.value;
    const ivaFinal = Number(numeroIva);

    const ivaTotal1 = (numero1 * ivaFinal) / 100;
    const suma_1 = (numero1 + ivaTotal1);

    const input3 = document.getElementById("cantidad2");
    const numero2 = input3.value;
    const numero_2 = Number(numero2);

    const ivaTotal2 = (numero_2 * ivaFinal) / 100;
    const suma_2 = (numero_2 + ivaTotal2);

    const input4 = document.getElementById("cantidad3");
    const numero3 = input4.value;
    const numero_3 = Number(numero3);

    const ivaTotal3 = (numero_3 * ivaFinal) / 100;
    const suma_3 = (numero_3 + ivaTotal3);

    const input5 = document.getElementById("cantidad3");
    const numero4 = input5.value;
    const numero_4 = Number(numero4);

    const ivaTotal4 = (numero_4 * ivaFinal) / 100;
    const suma_4 = (numero_4 + ivaTotal4);

    const resultado = document.getElementById("resultado");
    const sumaResultado = (suma_1 + suma_2 + suma_3 + suma_4);
    resultado.innerText = "El total es: $" + sumaResultado.toFixed(2);
}