'use strict';
//Número de enlaces de la página

const enlaces = document.getElementsByTagName("a");
console.log(enlaces);
console.log(`Hay ${enlaces.length} enlaces`);

//Direccion a la que enlaza el penultimo enlace

const penultimo =enlaces [enlaces.length -2];
console.log(penultimo)

//Numero de enlaces del 3 parrafo

const tercer = document.getElementById("third-paragraph");
console.log(tercer);

const enlacesTercer = tercer.getElementsByTagName("a");

console.log(enlacesTercer.length);

//Insertar un nuevo contenido en un párrafo creado en HTML
const resultado = document.getElementById("resultado");
//Con innerHTML lo vinculamos
resultado.innerHTML = enlacesTercer.length;

//Ahora insertamos un nuevo párrafo en HTML desde js

//Crear un nodo tipo Elemento
const parrafo = document.createElement ('p');
//Crear el nodo tipo Text
const contenido = document.createTextNode('Este es un nuevo párrafo');
//Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);
//Añadir el nodo Element como hijo de la página
document.body.appendChild(parrafo);
