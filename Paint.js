
export default class ColorearHtml {
    constructor() {
        this.etiquetas = 'yellowgreen';
        this.atributos = 'palevioletred';
        this.nombres = 'cyan';

        this.reemplazar();
        this.espaciar();
    }

    reemplazar() {
        document.addEventListener('DOMContentLoaded', () => {
            const codigoHtml = document.querySelectorAll('.colorear');
            codigoHtml.forEach(c => this.colorear(c));

        });
    }

    colorear(codigoHtml) {
        codigoHtml.style.backgroundColor = "#333333";
        codigoHtml.style.padding = '1em';
        codigoHtml.style.color = 'gainsboro';

        const contenido = codigoHtml.innerHTML;

        const contenidoModificado = contenido
            .replace(/class/g, `<L style="color: ${this.atributos};">class</L>`)
            .replace(/id/g, `<L style="color: ${this.atributos};">id</L>`)

            .replace(/<header/g, `<br> &lt;<L style="color: ${this.etiquetas};">header</L>`)
            .replace(/<\/header>/g, `&lt;<L style="color: ${this.etiquetas};">/header</L>&gt;`)
            .replace(/<main/g, `<br> &lt;<L style="color: ${this.etiquetas};">main</L>`)
            .replace(/<\/main>/g, `&lt;<L style="color: ${this.etiquetas};">/main</L>&gt;`)
            .replace(/<footer/g, `<br> &lt;<L style="color: ${this.etiquetas};">footer</L>`)
            .replace(/<\/footer>/g, `&lt;<L style="color: ${this.etiquetas};">/footer</L>&gt;`)
            .replace(/<section/g, `<br> &lt;<L style="color: ${this.etiquetas};">section</L>`)
            .replace(/<\/section>/g, `&lt;<L style="color: ${this.etiquetas};">/section</L>&gt;`)
            .replace(/<h1/g, `<br> &lt;<L style="color: ${this.etiquetas};">h1</L>`)
            .replace(/<\/h1>/g, `&lt;<L style="color: ${this.etiquetas};">/h1</L>&gt;`)
            .replace(/<H1/g, `<br> &lt;<L style="color: ${this.etiquetas};">H1</L>`)
            .replace(/<\/H1>/g, `&lt;<L style="color: ${this.etiquetas};">/H1</L>&gt;`)
            .replace(/<h2/g, `<br> &lt;<L style="color: ${this.etiquetas};">h2</L>`)
            .replace(/<\/h2>/g, `&lt;<L style="color: ${this.etiquetas};">/h2</L>&gt;`)
            .replace(/<H2/g, `<br> &lt;<L style="color: ${this.etiquetas};">H2</L>`)
            .replace(/<\/H2>/g, `&lt;<L style="color: ${this.etiquetas};">/H2</L>&gt;`)
            .replace(/<H3/g, `<br> &lt;<L style="color: ${this.etiquetas};">H3</L>`)
            .replace(/<\/H3>/g, `&lt;<L style="color: ${this.etiquetas};">/H3</L>&gt;`)
            .replace(/<h3/g, `<br> &lt;<L style="color: ${this.etiquetas};">h3</L>`)
            .replace(/<\/h3>/g, `&lt;<L style="color: ${this.etiquetas};">/h3</L>&gt;`)
            .replace(/<h4/g, `<br> &lt;<L style="color: ${this.etiquetas};">h4</L>`)
            .replace(/<\/h4>/g, `&lt;<L style="color: ${this.etiquetas};">/h4</L>&gt;`)
            .replace(/<H4/g, `<br> &lt;<L style="color: ${this.etiquetas};">H4</L>`)
            .replace(/<\/H4>/g, `&lt;<L style="color: ${this.etiquetas};">/H4</L>&gt;`)
            .replace(/<H5/g, `<br>&lt;<L style="color: ${this.etiquetas};">H5</L>`)
            .replace(/<\/H5>/g, `&lt;<L style="color: ${this.etiquetas};">/H5</L>&gt;`)
            .replace(/<h5/g, `<br> &lt;<L style="color: ${this.etiquetas};">h5</L>`)
            .replace(/<\/h5>/g, `&lt;<L style="color: ${this.etiquetas};">/h5</L>&gt;`)
            .replace(/<h6/g, `<br> &lt;<L style="color: ${this.etiquetas};">h6</L>`)
            .replace(/<\/h6>/g, `&lt;<L style="color: ${this.etiquetas};">/h6</L>&gt;`)
            .replace(/<H6/g, `<br> &lt;<L style="color: ${this.etiquetas};">H6</L>`)
            .replace(/<\/H6>/g, `&lt;<L style="color: ${this.etiquetas};">/H6</L>&gt;`)
            .replace(/<button/g, `<br> &lt;<L style="color: ${this.etiquetas};">button</L>`)
            .replace(/<\/button>/g, `&lt;<L style="color: ${this.etiquetas};">/button</L>&gt;`)
            .replace(/<ul/g, `<br> &lt;<L style="color: ${this.etiquetas};">ul</L>`)
            .replace(/<\/ul>/g, `&lt;<L style="color: ${this.etiquetas};">/ul</L>&gt;`)
            .replace(/<li/g, `<br> &lt;<L style="color: ${this.etiquetas};">li</L>`)
            .replace(/<\/li>/g, `&lt;<L style="color: ${this.etiquetas};">/li</L>&gt;`)

            ;

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

}