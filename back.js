//DECLARACION DE VARIABLES Y MATRIZ//
const in_txt = document.getElementById("texto");
const txt_msg = document.getElementById("salida"); 
const vocales = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufar"]
];

//FUNCION PARA ENCRIPTAR TEXTO MEDIANTE INYECCION DE INDICES DE MATRIZ//
function encrip() {
    const txtEncriptar = document.getElementById("texto").value;
    const validar = /^[a-z\s]+$/;

    if (txtEncriptar.trim() === "") {
        alert("No has ingresado nada. Por favor, ingrese texto en el campo para así encriptarlo.");
        return;
    }
    if (!validar.test(txtEncriptar)) {
        alert("El texto ingresado no debe contener caracteres especiales, mayúsculas ni números.");
        document.getElementById("texto").value = "";
        return;
    }

    let textoEncriptado = "";
    for (let i = 0; i < txtEncriptar.length; i++) {
        let caracter = txtEncriptar[i];
        for (let j = 0; j < vocales.length; j++) {
            if (vocales[j][0] === caracter) {
                caracter = vocales[j][1];
                break;
            }
        }
        textoEncriptado += caracter;
    }
    in_txt.value="";
    document.getElementById("salida").value = textoEncriptado;
    document.querySelector('.btn-encriptar').disabled = true;
    document.querySelector('.btn-desencriptar').disabled = false;
    document.querySelector('.btn-copiar').disabled = false;
}
//FUNCION PARA LA DESENCRIPTACION DEL TEXTO//
function reverse() {
    const txtDesencriptar = document.getElementById("salida").value;

    let textoDesencriptado = "";
    let i = 0;
    while (i < txtDesencriptar.length) {
        let found = false;
        if (txtDesencriptar[i] === ' ') {
            textoDesencriptado += ' ';
            i++;
            continue;
        }
        for (let j = 0; j < vocales.length; j++) {
            if (txtDesencriptar.substring(i, i + vocales[j][1].length) === vocales[j][1]) {
                textoDesencriptado += vocales[j][0];
                i += vocales[j][1].length;
                found = true;
                break;
            }
        }
        if (!found) {
            textoDesencriptado += txtDesencriptar[i];
            i++;
        }
    }
    txt_msg.value="";
    document.getElementById("texto").value = textoDesencriptado;
    document.querySelector('.btn-encriptar').disabled = false;
    document.querySelector('.btn-desencriptar').disabled = true;
    document.querySelector('.btn-copiar').disabled = true;
}
//FUNCION PARA EL COPIADO EN EL PORTAPAPELES//
function copiar() {
    const textoEncriptado = txt_msg.value;

    navigator.clipboard.writeText(textoEncriptado)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })

}
