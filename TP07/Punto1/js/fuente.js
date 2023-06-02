let texto = document.getElementById('miTexto');
let fuenteElegida = document.getElementById('listaFuentes');
let tamaElegido = document.getElementById('tamaFuente');
let colorFuente = document.getElementById('colorFuente');
let formulario = document.getElementById('formulario');
let colorFondo = document.getElementById('colorFondo');

function cambiarFuente(){
    texto.style.fontFamily = fuenteElegida.value;
}

function cambiarTama(){
    let tama = tamaElegido.value;
    texto.style.fontSize = tama + "px";
}

function cambiarColorFuente(){
    texto.style.color = colorFuente.value;
}

function cambiarColorFondo(){
    formulario.style.backgroundColor = colorFondo.value;
}

fuenteElegida.addEventListener('change',cambiarFuente);
tamaElegido.addEventListener('change',cambiarTama);
colorFuente.addEventListener('change',cambiarColorFuente);
colorFondo.addEventListener('change', cambiarColorFondo);