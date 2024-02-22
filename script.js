function calcularFactorial() {
    let numero;
    do {
        let input = prompt("Ingrese un número para calcular su factorial:");
        numero = parseFloat(input);
    } while (isNaN(numero) || numero < 0 || !Number.isInteger(numero)); 
    let factorial = calcularFactorialRecursivo(numero);
    console.log("El factorial de " + numero + " es: " + factorial);

}

function calcularFactorialRecursivo(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorialRecursivo(n - 1);
    }
}
