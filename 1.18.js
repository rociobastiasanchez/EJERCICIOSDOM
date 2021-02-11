'use strict';
//Número de enlaces de la página

const enlaces = document.getElementsByTagName("a");
console.log(enlaces);
console.log(`Hay ${enlaces.length}$ enlaces`);

//Direccion a la que enlaza el penultimo enlace

const penultimo =enlaces [enlaces.length -2];
console.log(penultimo)

//Numero de enlaces del 3 parrafo

const tercer = document.getElementById("third-paragraph");
console.log(tercer);

const enlacesTercer = tercer.getElementsByTagName("a");

console.log(enlacesTercer.length);

const resultado = document.getElementById("resultado");
resultado.innerHTML = enlacesTercer.length;


