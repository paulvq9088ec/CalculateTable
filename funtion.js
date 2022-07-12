
function calcularPrecio() {
    const input1 = document.getElementById("cantidad");
    const numero = input1.value;
    const numero1 = Number(numero);

    const input2 = document.getElementById("iva");
    const numeroIva = input2.value;
    const ivaFinal = Number(numeroIva);

    const ivaTotal = (numero1 * ivaFinal) / 100;


    const resultado = document.getElementById("resultado");
    resultado.innerText = (numero1 + ivaTotal);
}
    