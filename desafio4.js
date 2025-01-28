// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
let saludoUsuario = "Bienvenido :D";
console.log(saludoUsuario);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log 
// para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nnombre = "Valeska";
console.log(`¡Hola ${nombre}!`);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar 
// el mensaje "¡Hola, [tu nombre]!".

let nombre = "Valeska";
alert(`¡Hola ${nombre}!`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. 
// Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajePreferido = prompt("Hola, ¿cual es el lenguaje de programación que más te gusta?")
console.log(`El lenguaje de programación que más te gusta es ${lenguajePreferido}`);


// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de 
// tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera 
// variable llamada "resultado". Utiliza console.log para mostrar el mensaje 
// "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

let valor1 = 18;
let valor2 = 12;
let resultado = (valor1 + valor2);
console.log("La suma de " + valor1 + " y " + valor2 + " es igual a " + resultado);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos 
// de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una 
// tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje 
// "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

let valorr1 = 30;
let valorr2 = 15;
let resultadoo = (valorr1 - valorr2);
console.log(`La diferencia entre ${valorr1} y ${valorr2} es ${resultadoo}`)

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if 
// para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edadUsuario = parseInt(prompt("Hola, ingresa tu edad"));
if(isNaN(edadUsuario)){
    alert("Debes ingresar un número válido");
    edadUsuario = parseInt(prompt("Hola, ingresa tu edad"));
}else if(edadUsuario >= 18){
        console.log("Eres mayor de edad")
    }else{
        console.log("Eres menor de edad");
}

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, 
// negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = parseInt(prompt("Ingrese un número"));
if(numero > 0){
    console.log("El número es positivo")
}else if(numero === 0){
    console.log("El número es 0");
}else{
    console.log("El número es negativo");
}

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}

// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar 
// si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 6;
if(nota >= 7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroRandom = Math.floor(Math.random()* 10) + 1;

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

let numeroGenerado = Math.floor(Math.random()* 1000) + 1;