import {ColorearHtml} from './Paint.js';

//new ColorearHtml('red',null,'black','yellow');

ColorearHtml.Builder()
.etiquetas()
.background(ColorearHtml.colores.azul(.5))
.atributos('pink')
.letras('white')
.build()

console.log(ColorearHtml.colores.azul())