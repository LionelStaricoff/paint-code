
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
            "button", "ul", "li", "nav", "pre", "hr", "ol", "blockquote", 'strong', 'i', 'p',
            'canvas', 'iframe', '!DOCTYPE html', 'html', 'base', 'bdi', 'bdo','div',
            'table', 'tr', 'td', 'thead', 'colgroup', 'col', 'th', 'caption', 'head', 'title', 'body', 'dfn', 'abbr', 'address', 'script',
            'video', 'a', 'form', 'label', 'input', 'map', 'area', 'audio', 'source', 'cite', 'var', 'samp', 'kbd', 'data', 'datalist',
            'option', 'dl', 'dt', 'dd', 'del', 'ins', 'details', 'summary', 'dfn', 'dialog', 'em', 'embed', 'legend', 'fieldset',
            'figure', 'figcaption', 'hgroup', 'mark', 'menu', 'meta', 'meter', 'noscript', 'object', 'optgroup', 'output', 'param',
            'picture', 'progress', 'ruby', 'rp', 'rt', 's', 'samp', 'search', 'select', 'small', 'strong', 'sub', 'details', 'sup', 'svg',
            'circle', 'tbody', 'template', 'textarea', 'tfoot', 'time', 'track', 'u', 'wbr',

            'srcset', 'alt', 'class', 'id', 'src', 'frameborder', 'action', 'method', 'name', 'for', 'type', 'value', 'href', 'target',
            'usemap', 'width', ' height', 'shape', 'coords', 'controls', 'autoplay', 'loop', 'muted', 'preload', 'dir', 'cite',
            'max-width', 'min-height', 'max-height', 'min-width',
            'autofocus', 'disabled', 'text-align', 'padding', 'padding-top', 'padding-bottom',
            'font-style', 'font-weight', 'font-variant', 'font-size', 'rel', 'text-shadow', 'open', 'charset', 'content', 'initial-scale', 'min',
            'max', 'data', 'placeholder', 'cy', 'stroke', 'fill', 'stroke-width', 'rows', 'cols', 'datetime', 'kind', 'srclang'
        ];



        const atributos = ['srcset', 'alt', 'class', 'id', 'src', 'frameborder', 'action', 'method', 'name', 'for', 'type', 'value', 'href',
            'target', 'usemap', 'width', ' height', 'shape', 'coords', 'controls', 'autoplay', 'loop', 'muted', 'preload', 'dir', 'cite',
            'autofocus', 'disabled', 'text-align', 'padding-right', 'padding', 'padding-top', 'padding-bottom',
            'max-width', 'min-width', 'min-height', 'max-height',
            'font-style', 'font-weight', 'font-variant', 'font-size', 'rel', 'text-shadow', 'open', 'charset', 'content', 'initial-scale',
            'min', 'max', 'data', 'placeholder', 'cy', 'stroke', 'fill', 'stroke-width', 'rows', 'cols', 'datetime', 'kind', 'srclang'
        ];

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

    static etiquetas(color) {
        this.Builder._etiquetas = color ?? 'yellowgreen';
        return this;
    }
    static atributos(color) {
        this.Builder._atributos = color ?? 'palevioletred';
        return this;
    }

    static background(color) {
        this.Builder._background = color ?? "#333333";
        return this;
    }


    static letras(color) {
        this.Builder._letras = color ?? 'gainsboro';
        return this;
    }
    static build() {
        return this.Builder;

    }

    static colores = {
        azul: (alfa = 1) => { return `rgb(0, 0, 255,${alfa})` },
        negro: (alfa = 1) => { return `rgb(0, 0, 0,${alfa})` },
        rojo: (alfa = 1) => { return `rgb(255, 0, 0,${alfa})` },
        amarillo: (alfa = 1) => { return `rgb(255, 255, 0,${alfa})` },
        blanco: (alfa = 1) => { return `rgb(255, 255, 255,${alfa})` },
        verde: (alfa = 1) => { return `rgb(0, 128, 0,${alfa})` },
        marron: (alfa = 1) => { return `rgb( 165, 42, 42,${alfa})` },
        violeta: (alfa = 1) => { return `rgb(138, 43, 226,${alfa})` },
        beige: (alfa = 1) => { return `rgb(245, 245, 220,${alfa})` },
        naranja: (alfa = 1) => { return `rgb(255, 165, 0,${alfa})` },
        rosa: (alfa = 1) => { return `rgb(255, 192, 203,${alfa})` }


    }
}