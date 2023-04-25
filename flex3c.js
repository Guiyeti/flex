//nos ayuda a no dejar pasar nigún error
'use strict';
//este programa solo define funciones que son invocadas
//

//cogemos el color con una funcion
var color = 'white';

//trabajamos con array
var colorFr=['aqua','rgb(0, 104, 69)','rgb(247, 216, 176)','coral','crimson'];

//otra forma de declarar el array
var colorFn=[];
colorFn[0]='white';
colorFn[1]='blue';
colorFn[2]='yellow';
colorFn[3]='green';
colorFn[4]='red';

function pinturaInicial(){
   for(i=0;i<5;i++){
    let identificador="c"+(i+1);
    let elemento=document.getElementById(identificador);
    elemento.style.backgroundColor=colorFn[i];
    elemento.style.color=colorFr[i];
   }
   
}


function obtieneColor(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    color = getComputedStyle(cuadro).backgroundColor;
    console.log(color);
}
function saludar(identificador) {
    let id = "c" + identificador;
    let cuadro = document.getElementById(id);
    cuadro.style.color = color;
    cuadro.innerHTML = "HOLA";
}

pinturaInicial()
