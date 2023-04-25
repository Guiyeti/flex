//nos ayuda a no dejar pasar nigún error
'use strict';

//pedimos el color
var color = 'white';

function eligeColor() {
    color = prompt("escribe el color que quiere el saludo(rojo,azul,amarillo)", "");
    switch (color) {
        case 'rojo':
            color = 'red';
            break;
        case 'azul':
            color = 'blue';
            break;
        case 'amarillo':
            color = 'yellow';
            break;
        default:
            color = 'black';//lo pongo en negro para saber que es un color equivocado
            break;
    }
}

function saludarc1() {
    let cuadro = document.getElementById("c1");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
function saludarc2() {
    let cuadro = document.getElementById("c2");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
function saludarc3() {
    let cuadro = document.getElementById("c3");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
function saludarc4() {
    let cuadro = document.getElementById("c4");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}
function saludarc5() {
    let cuadro = document.getElementById("c5");
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}


eligeColor();
