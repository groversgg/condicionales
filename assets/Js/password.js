

document.getElementById('verificar').addEventListener('click', function () {
    const numero1 = Number(document.getElementById('num1').value);
    const numero2 = Number(document.getElementById('num2').value);
    const numero3 = Number(document.getElementById('num3').value);

    // Convertir los valores a números
    // Convertir los valores a números
    const valor1 = parseInt(numero1, 10);
    const valor2 = parseInt(numero2, 10);
    const valor3 = parseInt(numero3, 10);
    
    console.log(valor1,valor2,valor3);
    if (valor1 == 9 && valor2 == 1 && valor3 == 1) {
        document.querySelector('p').innerHTML = "Password 1 Correcto";
    } else {
        if (valor1 == 7 && valor2 == 1 && valor3 == 4) {
            document.querySelector('p').innerHTML = "Password 2 Correcto";
        } else {
            document.querySelector('p').innerHTML = "Password Incorrecto";
        }
    }
});

