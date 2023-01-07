

const imagen = document.getElementById("div_imagen"); 
const mensaje = document.getElementById("div_mensaje");

const display = (a, b) => {
    mensaje.style.visibility = a;
    imagen.style.visibility = b;
}
display("hidden", "visible");


const encriptar = () => {

    display("visible", "hidden");

    const texto = document.getElementById("palabra").value;
    const cifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    mensaje.innerHTML = cifrado;
};



const desencriptar = () => {

    display("visible", "hidden");

    const texto = document.getElementById("palabra").value;
    const cifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    mensaje.innerHTML = cifrado;
};