//nos ayuda a no dejar pasar nigún error
'use strict';

//pedimos el numero de cuadro donde escribir HOLA
var cuadro=prompt("escribe el cuadro en el que quiere saludar(1 a 5 incluidos)","");
cuadro=parseInt(cuadro);

//cuadro será una variable numérica entre 1 y 5
var estecuadro="";

switch (cuadro){
    case 1:
        estecuadro=document.getElementById("c1")
        break;
    case 2:
        estecuadro=document.getElementById("c2")
        break;
    case 3:
        estecuadro=document.getElementById("c3")
        break;
    case 4:
        estecuadro=document.getElementById("c4")
        break;
    case 5:
        estecuadro=document.getElementById("c5")
        break;
    default:
        alert("numero no admitido");
}

if(estecuadro!=""){
    estecuadro.innerHTML="HOLA";
    
}

alert("si editas el html, puedes usar 3 js alternativos");