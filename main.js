import ColorearHtml from './Paint.js';

//new ColorearHtml('red',null,'rgb(0, 0, 0)','yellow');


ColorearHtml.Builder()
.etiquetas(ColorearHtml.colores.naranja('90%'))
.background(ColorearHtml.colores.negro('90%'))
.atributos(ColorearHtml.colores.blanco())
.letras(ColorearHtml.colores.amarillo(.8))
.build()

