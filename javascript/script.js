'use strict';

 /* Crear 4 funciones que lean dos números y cada función deberá
realizar una operación aritmetica básica + - x /
imprimir en consola el resultado así: 10 + 5 = 15
*/
const num1 = 10;
const num2 = 5;
function suma() {
    let resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
}           

function resta() {
    let resultado = num1 - num2;
    console.log(`${num1} - ${num2} = ${resultado}`);
}

function multiplicacion() {
    let resultado = num1 * num2;
    console.log(`${num1} * ${num2} = ${resultado}`);
}

function division() {
    let resultado = num1 / num2;
        console.log(`${num1} / ${num2} = ${resultado}`);
}

suma();
resta();
multiplicacion();
division();