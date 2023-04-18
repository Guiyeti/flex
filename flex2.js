//nos ayuda a no dejar pasar nigún error
'use strict';

//pedimos el numero de cuadro donde escribir HOLA
var cuadro=prompt("escribe el cuadro en el que quiere saludar(1 a 5 incluidos)","");
cuadro=parseInt(cuadro);

//cuadro será una variable numérica entre 1 y 5
var selector="c"+cuadro;

var estecuadro=document.getElementById(selector);
estecuadro.innerHTML="HOLA";