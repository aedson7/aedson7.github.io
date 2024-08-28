

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"],
    ["a", "ai"],
];

function encriptar() {
    let mensaje = document.getElementById("texto").value;
    let mensajeEncriptado = "";

    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("imgmuneco");

    if (mensaje.length != 0) {

        for (let i = 0; i < mensaje.length; i++) {
            let letra = mensaje[i];
            let encriptada = letra;
            for (let j = 0; j < llaves.length; j++) {
                if (letra === llaves[j][0]) {
                    encriptada = llaves[j][1];
                    break;
                }
            }
            mensajeEncriptado += encriptada;
        }

        document.getElementById("texto").value = mensajeEncriptado;
        tituloMensaje.textContent = "texto encriptado con exito";
        parrafo.textContent = "";
        document.getElementById("imgmuneco").src = "./imagenes/encriptado.png";

    } else {
        muneco.src = "./imagenes/muneco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa un texto para encriptar o desencriptar"
        alert("debes ingresar un texto");
    }

}

function desencriptar() {

    let mensajeDesencriptado = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("imgmuneco");

    if (mensajeDesencriptado.length != 0) {

        for (let i = 0; i < llaves.length; i++) {
            let regex = new RegExp(llaves[i][1], "g");
            mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
        }

        document.getElementById("texto").value = mensajeDesencriptado;
        tituloMensaje.textContent = "texto desencriptado con exito";
        parrafo.textContent = "";
        muneco.src = "./imagenes/muneco.png";
        
    } else {
        muneco.src = "./imagenes/muneco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "ingresa un texto para encriptar o desencriptar"
        alert("debes ingresar un texto");
    }

}

