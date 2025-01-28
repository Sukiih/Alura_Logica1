// Pregunta al usuario qué día de la semana es. Si la respuesta 
// es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaSemana = prompt("Ingresa el dia de la semana");
if (diaSemana === "Sábado" || diaSemana === "Domingo") {
    alert("Buen fin de semana!");
}else{
    alert("Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. 
// Muestra una alerta informativa.

let numUsuario = parseInt(prompt("Ingrese un número"));
if (numUsuario > 0 ){
   alert("El número es positivo");
}else if(numUsuario === 0){
    alert ("El número es cero");
}else{
  alert ("El número es negativo");
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
// muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacion = parseInt(prompt("Ingrese la puntuación"));
if (isNaN(puntuacion)){
    alert ("Por favor, ingrese un número");
}else if (puntuacion >= 100){
    alert("¡Felicidades, has ganado!");
}else{
    alert("Intentalo nuevamente para ganar.");
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
// utilizando un template string para incluir el valor del saldo.

let saldoUsuario = parseInt(prompt("Ingrese su saldo"));
if(isNaN(saldoUsuario)){
    alert("Por favor, ingrese un número válido");
} else {
    alert(`Su saldo es: ${saldoUsuario}`);
}


// Pide al usuario que ingrese su nombre mediante un prompt. 
// Luego, muestra una alerta de bienvenida usando ese nombre.

let nombreUsuario = prompt("Ingrese su nombre");
alert(`Bienvenido ${nombreUsuario} :)`)