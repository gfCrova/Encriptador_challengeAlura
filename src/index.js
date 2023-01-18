
const imagen = document.getElementById("div_imagen"); 
const mensaje = document.getElementById("mensaje");
const button = document.getElementById("btnCopy");

const display = (a, b, c) => {
    mensaje.style.visibility = a;
    imagen.style.visibility = b;
    button.style.visibility = c;
}
display("hidden", "visible", "hidden");


// Funciones de Encriptación y Desescriptación del texto
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


// Función para COPIAR el texto
const copyText = () => {

    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensaje.value);

    alerts('Copiado', 'success', 2500, '.div_mensaje', '#btnCopy', 'bi bi-check');
}

// Controlar el ingreso del texto (Solo Minúsculas y sin caracteres especiales)
const check = (e) => {

    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 8) {
        return true;
    }
    patron = /[a-z\s]/;
    tecla_final = String.fromCharCode(tecla);
    if (!patron.test(tecla_final)) {
        alerts('Solo se permiten letras minúsculas y sin acentos', 'danger', 2000, '.div_palabra', '.small', 'bi bi-x');
        disableTextArea();
    }
    return patron.test(tecla_final);
}

// Alerta de Contenido COPIADO
const alerts = (mensaje, colorCss, time, contain, area, icon) => {

    const div = document.createElement('div');
    div.className = `alert alert-${colorCss} position-absolute ${icon}`;
    div.appendChild(document.createTextNode(mensaje));

    const container = document.querySelector(contain);
    const textarea = document.querySelector(area);
    container.insertBefore(div, textarea);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, time);
}

// Disable TEXTAREA
const disableTextArea = () => {
    document.getElementById("palabra").disabled = true;
    setTimeout(() => {
        document.getElementById("palabra").disabled = false;
    }, 1000);
}

// Cambiar Modo Oscuro
const modoOscuro = () => {
    const cuerpo = document.body;
    cuerpo.classList.toggle('darkBg');
}