const textArea = document.querySelector(".textoCifrado");
const mensaje = document.querySelector(".textoResultado");

function btnEncriptar() {

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let estructuraCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < estructuraCodigo.length; i++) {
        if (stringEncriptado.includes(estructuraCodigo[i][0])) {

            stringEncriptado = stringEncriptado.replaceAll(estructuraCodigo[i][0], estructuraCodigo[i][1])

        }

    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let estructuraCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < estructuraCodigo.length; i++) {
        if (stringDesencriptado.includes(estructuraCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(estructuraCodigo[i][1], estructuraCodigo[i][0])

        }
    }
    return stringDesencriptado
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";

}