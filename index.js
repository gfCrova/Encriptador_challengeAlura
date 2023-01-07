

const imagen = document.getElementById("div_imagen"); 
const mensaje = document.getElementById("div_mensaje");
mensaje.style.visibility = "hidden";
imagen.style.visibility = "visible";

const encriptar = () => {

    const texto = document.getElementById("palabra").value;

    mensaje.style.visibility = "visible";
    mensaje.innerHTML = texto;
    imagen.style.visibility = "hidden";
};