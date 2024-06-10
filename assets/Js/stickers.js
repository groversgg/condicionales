document.getElementById('verificar').addEventListener('click', function() {
    const unityValue = document.getElementById('input1').value;
    const unrealValue = document.getElementById('input2').value;
    const cryengineValue = document.getElementById('input3').value;

    // Convertir los valores a números
    const unityAmount = parseInt(unityValue, 10);
    const unrealAmount = parseInt(unrealValue, 10);
    const cryengineAmount = parseInt(cryengineValue, 10);

    suma = unityAmount + unrealAmount + cryengineAmount;
    let elemento = document.querySelector("p");
    
    if(suma > 10){
        elemento.innerHTML = "Llevas demasiados Stikers";
        //alert("asd");
    }else{
        if(suma <= 0){
            elemento.innerHTML = "No lleveras Ninguno?";
        }else{
            elemento.innerHTML = "Cantidad Correcta";
        }
        
        //alert("no");
    }
});