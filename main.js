import ColorearHtml from './Paint.js';
import {ColorearHtmlInnerText} from './Paint.js';

//new ColorearHtml('red',null,'rgb(0, 0, 0)','yellow');
const p = document.querySelector('.innertext')
p.innerText = `
           <div id="doble_button">
           <span>X</span>
           <input type="button" value="Guardar_bbdd">
           <input type="button" value="cargar_bbdd">
           </div>

`;
/*
ColorearHtml.Builder()
.etiquetas(ColorearHtml.colores.naranja('90%'))
.background(ColorearHtml.colores.negro('90%'))
.atributos(ColorearHtml.colores.blanco())
.letras(ColorearHtml.colores.amarillo(.8))
.build()*/

ColorearHtmlInnerText.Builder()
.etiquetas('white')
.background('#333')
.atributos('orange')
.letras('green')
.build()