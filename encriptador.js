
function encriptar(){
    let mensaje=document.getElementById('message').value;
    let texto=mensaje.toLowerCase();
    let texto_encriptado=texto
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll('u',"ufat");
    document.getElementById('pitou').style.visibility = "hidden";
    document.getElementById('textos').style.visibility = "hidden";
    document.getElementById('result').innerHTML =texto_encriptado ;
}

function desencriptar(){
    let mensaje=document.getElementById('message').value;
    let texto=mensaje.toLowerCase();
    let texto_desencriptado=texto
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    document.getElementById('pitou').style.visibility = "hidden";
    document.getElementById('textos').style.visibility = "hidden";
    document.getElementById('result').innerHTML =texto_desencriptado ;
}

function copiar(id_elemento){
    // Crea un campo de texto "oculto"
  var aux = document.createElement("input");
  // Asigna el contenido del elemento especificado al valor del campo
  aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
  // Añade el campo a la página
  document.body.appendChild(aux);
   // Selecciona el contenido del campo
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy");
   // Elimina el campo de la página
  document.body.removeChild(aux);
}

