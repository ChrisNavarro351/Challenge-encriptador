    
  
function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloTexto = document.getElementById("titulo-texto");
    let parrafo = document.getElementById("parrafo");
    let dibujo = document.getElementById("dibujo");


    if (!esMinusculaSinTilde(texto)) {
        alert("El texto debe estar en minúsculas y no contener tildes ni caracteres especiales.");
        return;
    }

    let textoCifrar = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("texto").value = textoCifrar;
        tituloTexto.textContent = textoCifrar;
        parrafo.textContent = "";
    } else {
        dibujo.src = "./assets/Muñeco.png";
        tituloTexto.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function esMinusculaSinTilde(texto) {
   
    if (texto !== texto.toLowerCase()){
        return false;
    }


    let textoNormalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    return texto === textoNormalizado;
}


function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloTexto = document.getElementById("titulo-texto");
    let parrafo = document.getElementById("parrafo");
    let dibujo = document.getElementById("dibujo");


    if (!esMinusculaSinTilde(texto)) {
        alert("El texto debe estar en minúsculas y no contener tildes ni caracteres especiales.");
        return;
    }

    let textoDescifrar = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoDescifrar;
        tituloTexto.textContent = textoDescifrar;
        parrafo.textContent = ""; 
    } else {
        dibujo.src = "./assets/Muñeco.png";
        tituloTexto.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}

function esMinusculaSinTilde(texto) {
   
    if (texto !== texto.toLowerCase()) {
        return false;
    }

    let textoNormalizado = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let caracteresEspeciales = /[^a-z\s]/g;

    if(caracteresEspeciales.test(textoNormalizado)){
        return false;
    }
    return texto === textoNormalizado;
}


function copiar() {

    let texto = document.getElementById("texto").value;
    if (texto.length != 0){
        navigator.clipboard.writeText(texto).then(function() {
            alert("Texto copiado al portapapeles");},
            function(err){
                alert("Error al copiar el texto: ", err);
            });
            } else{
                alert("No hay texto para copiar");
            }
        }
document.getElementById("copiar").addEventListener("click", copiar);
