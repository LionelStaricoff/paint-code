import {ColorearHtml} from './Paint.js';

//new ColorearHtml('red',null,'black','yellow');

ColorearHtml.Builder()
.etiquetas(ColorearHtml.colores.naranja('90%'))
.background(ColorearHtml.colores.azul(.8))
.atributos(ColorearHtml.colores.negro())
.letras(ColorearHtml.colores.blanco())
.build()

