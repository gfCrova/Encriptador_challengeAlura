

const imagen = document.getElementById("div_imagen"); 
const mensaje = document.getElementById("mensaje");
const button = document.getElementById("btnCopy");

const display = (a, b, c) => {
    mensaje.style.visibility = a;
    imagen.style.visibility = b;
    button.style.visibility = c;
}
display("hidden", "visible", "hidden");


const encriptar = () => {

    display("visible", "hidden", "visible");

    const texto = document.getElementById("palabra").value;
    const cifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    mensaje.innerHTML = cifrado;
};



const desencriptar = () => {

    display("visible", "hidden", "visible");

    const texto = document.getElementById("palabra").value;
    const cifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    mensaje.innerHTML = cifrado;
};


const copyText = () => {

    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensaje.value);

    alertCopiado('Copiado', 'success')
}


const alertCopiado = (mensaje, colorCss) => {

    const div = document.createElement('div');
    div.className = `alert alert-${colorCss} position-absolute bi bi-check`;
    div.appendChild(document.createTextNode(mensaje));

    const container = document.querySelector('.div_mensaje');
    const area = document.querySelector('#btnCopy');
    container.insertBefore(div, area);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2500);
}


const check = (e) => {

    tecla = (document.all) ? e.keyCode : e.which;

    if (tecla == 8) {
        return true;
    }
    patron = /[a-z\s]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}