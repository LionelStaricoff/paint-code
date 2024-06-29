import {ColorearHtml} from './Paint.js';

//new ColorearHtml('red',null,'black','yellow');

ColorearHtml.Builder()
.etiquetas(ColorearHtml.colores.naranja('90%'))
.background(ColorearHtml.colores.negro(.7))
.atributos(ColorearHtml.colores.verde())
.letras(ColorearHtml.colores.amarillo(.8))
.build()

