<div align=center>

# paintcode

### version 2.1.3

<h4>Colorea tu código para que se vea <b>elegante</b></h4>

<img src='https://raw.githubusercontent.com/LionelStaricoff/paint-code/main/html_coloreado.jpeg'>

#

## Desde npm:

<pre>
<code>
npm i codepaint
</code>
</pre>

### Enlazar el archivo desde node_modules y ejecuta el constructor:

<pre>
<code>
import ColorearHtml from './node_modules/paintcode/Paint.js'

new ColorearHtml();
</code>
</pre>

#

Solo debes colocar el script en tu html y agregar la clase colorear al padre:
#

<pre>
<code>
   &lt;script type="module" &gt;  
       import ColorearHtml from 'https://lionelstaricoff.github.io/paint-code/Paint.js';
       new ColorearHtml();
      &lt;script&gt;
</code>
</pre>

#
<img src='https://raw.githubusercontent.com/LionelStaricoff/paint-code/main/html.jpeg'>


## Utiliza el constructor 

### Personaliza tus colores: etiquetas,atributos,fondo y letras:

<pre>
<code>
   &lt;script type="module" &gt;  
       import ColorearHtml from 'https://lionelstaricoff.github.io/paint-code/Paint.js';
      new ColorearHtml('red','blue','black','yellow');
      &lt;script&gt;
</code>
</pre>

<img src='https://raw.githubusercontent.com/LionelStaricoff/paint-code/main/img2.jpeg'>

#

## Utiliza el constructor Builder

### Puedes pasar por parámetro nombres de colores, colores hexadecimal, RGB, RGBA, HLS, HWB y también puedes usar la clase estática ColorearHtml.colores();

<pre>
<code>
   &lt;script type="module" &gt;  
       import ColorearHtml from 'https://lionelstaricoff.github.io/paint-code/Paint.js';

     ColorearHtml.Builder()
                           .etiquetas('rgb(26, 76, 76)')
                           .background('#333')
                           .atributos('hsl(350, 100%, 88%)')
                           .letras('hwb(0 100% 0%)')
                           .build()
      &lt;script&gt;
</code>
</pre>


## Clase estatica colores:
### puedes pasar por parametro el alfa como un string en porcentaje y con punto:

<pre>
<code>
   &lt;script type="module" &gt;  
       import ColorearHtml from 'https://lionelstaricoff.github.io/paint-code/Paint.js';

     ColorearHtml.Builder()
              .etiquetas(ColorearHtml.colores.naranja('90%'))
              .background(ColorearHtml.colores.azul(.8))
              .atributos(ColorearHtml.colores.negro())
              .letras(ColorearHtml.colores.blanco())
              .build()
      &lt;script&gt;
</code>
</pre>

#

### Importando de forma dinámica y guardarla en una variable global:

<pre>
<code>
   &lt;script type="module" &gt;  
       
        import('https://lionelstaricoff.github.io/paint-code/Paint.js')
                .then(module => module.default)

                .then(data => {

                 globalThis.color =  class colorearModule extends  data{};
                    
                 globalThis.color.Builder()
                    .etiquetas('blue')
                    .background('red')
                    .atributos('green')
                    .letras('black')
                    .build();
                })
                .catch(error => console.error(error));

      &lt;script&gt;
</code>
</pre>

&copy; Todos los derechos recervados por mi <a target=_blank href="https://www.linkedin.com/in/lionel-staricoff/"> Staricoff Lionel</a>





</div>