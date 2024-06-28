
export class ColorearHtml {
    constructor(etiquetas, atributos, background, letras) {
        this._etiquetas = (etiquetas) ? etiquetas : 'yellowgreen';
        this._atributos = (atributos) ? atributos : 'palevioletred';
        this._background = (background) ? background : "#333333";
        this._letras = (letras) ? letras : 'gainsboro';
        this.builder;

        this.reemplazar();
        this.espaciar();
    }

    reemplazar() {
        document.addEventListener('DOMContentLoaded', () => {
            const codigoHtml = document.querySelectorAll('.colorear');
            codigoHtml.forEach(c => this.colorar(c));

        });
    }


    colorar(codigoHtml) {
        codigoHtml.style.backgroundColor = this._background;
        codigoHtml.style.padding = '1em';
        codigoHtml.style.color = this._letras;
        const contenido = codigoHtml.innerHTML;
        const etiquetas = ["header", "main", "footer", "section", "h1", "H1", "h2", "H2", "h3", "H3", "h4", "H4", "h5", "H5", "h6", "H6",
            "button", "ul", "li", "nav", "pre", "hr", "ol", "blockquote"
            , 'span', 'canvas', 'iframe', 'class', 'id', 'src', 'frameborder', 'srcset', 'alt',
            'tr', 'td', 'thead',
            'video', 'a', 'form', 'action', 'method'];



        const atributos = ['srcset', 'alt', 'class', 'id', 'src', 'frameborder',
            'action', 'method'];

        let contenidoModificado = contenido
        etiquetas.forEach(etiqueta => {

            if (atributos.includes(etiqueta)) {
                contenidoModificado = contenidoModificado
                    .replace(new RegExp(`${etiqueta}\\b`, 'g'), `<L style="color: ${this._atributos};">${etiqueta}</L>`)


            } else {
                contenidoModificado = contenidoModificado
                    .replace(new RegExp(`<${etiqueta}\\b`, 'g'), `<br> &lt;<L style="color: ${this._etiquetas};">${etiqueta}</L>`)
                    .replace(new RegExp(`</${etiqueta}>`, 'g'), `&lt;<L style="color: ${this._etiquetas};">/${etiqueta}</L>&gt;`);
            }

        });

        codigoHtml.innerHTML = contenidoModificado;
    }

    espaciar() {

        const codigoHtml = document.querySelectorAll('.colorear');

        for (const c of codigoHtml) {

            if (c.children.length > 0) {
                const hijos = c.children;
                this.colocarPadding(hijos);
            }

        }
    }
    colocarPadding(hijo) {

        for (const c of hijo) {
            if (c.children.length > 0) {
                const hijos = c.children;

                this.colocarPaddingInterno(hijos);

            }
        }
    }
    colocarPaddingInterno(hijos, padding = 20,) {

        const span = document.createElement('span')
        span.style.display = 'block'
        span.style.marginLeft = `${padding}px`;
        span.style.marginTop = '-20px';
        for (const ch of hijos) {
            const padre = ch.parentNode;


            span.appendChild(ch);
            padre.appendChild(span)


            if (ch.children.length > 0) {

                const hijos2 = ch.children;

                this.colocarPaddingInterno2(hijos2, 40);
            }
        }
    }
    colocarPaddingInterno2(hijos, padding) {
        const div = document.createElement('div')
        div.style.marginLeft = `${padding}px`;
        div.style.marginTop = '-20px';
        let padre;
        const hijos1 = Array.from(hijos);

        for (const ch of hijos1) {
            padre = ch.parentNode;
            div.appendChild(ch);

        }
        padre.appendChild(div);
    }

    static Builder() {
        this.Builder = new ColorearHtml();
        return this;
    }

    static etiquetas(color){
        this.Builder._etiquetas = color;
        return this;
    }
    static atributos(color){
        this.Builder._atributos = color;
        return this;
    }

    static background(color){
        this.Builder._background = color;
        return this;
    }

    
    static letras(color){
        this.Builder._letras = color;
        return this;
    }
    static build(){
       return this.Builder;
     
    }
}