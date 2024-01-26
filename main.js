// Función para encriptar el mensaje
function encriptarMensaje() {
  var mensajeOriginal = document.getElementById('entradatexto').value;
  var mensajeEncriptado = mensajeOriginal.replace(/e/g, 'enter')
                                         .replace(/i/g, 'imes')
                                         .replace(/a/g, 'ai')
                                         .replace(/o/g, 'ober')
                                         .replace(/u/g, 'ufat');
  mostrarMensajeEncriptado(mensajeEncriptado);
}

// Función para desencriptar el mensaje
function desencriptarMensaje() {
  var mensajeOriginal = document.getElementById('entradatexto').value;
  var mensajeDesencriptado = mensajeOriginal.replace(/enter/g, 'e')
                                            .replace(/imes/g, 'i')
                                            .replace(/ai/g, 'a')
                                            .replace(/ober/g, 'o')
                                            .replace(/ufat/g, 'u');
  mostrarMensajeEncriptado(mensajeDesencriptado);
}

// Función para mostrar el mensaje encriptado/desencriptado
function mostrarMensajeEncriptado(mensaje) {
  var miparrafo = document.getElementById('parrafo');
  var img = document.getElementById('muneco');
  document.getElementById('textosalida').textContent = mensaje;
  miparrafo.style.display = 'none';
  img.style.display = 'none';
}

// Función para copiar el mensaje
function copiarMensaje() {
  var contenidoOrigen = document.getElementById('textosalida').innerText;
  navigator.clipboard.writeText(contenidoOrigen);
}