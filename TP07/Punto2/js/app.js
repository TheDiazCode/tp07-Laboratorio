document.getElementById('calcular').addEventListener('click', function() {
  const form = document.getElementById('formulario');
  const comensales = parseInt(form.comensales.value);
  const incluirPan = form.pan.checked;
  const incluirEnsaladas = form.ensaladas.checked;

  let asado = comensales * 0.5;
  let chorizo = comensales;
  let morcilla = comensales * 0.25;
  let gaseosa = comensales;

  if (incluirPan) {
    asado *= 0.9;
    chorizo *= 0.9;
    morcilla *= 0.9;
    gaseosa *= 0.9;
    pan = comensales;
  }

  if (incluirEnsaladas) {
    asado *= 0.9;
    chorizo *= 0.9;
    morcilla *= 0.9;
    gaseosa *= 0.9;
    tomate = comensales;
    huevo = comensales;
    lechuga = comensales * 0.25;
  }

  const listaCompras = document.getElementById('listaCompras');
  listaCompras.innerHTML = `
    <h2>Lista de Compras:</h2>
    <p>Asado: ${asado.toFixed(2)} kg</p>
    <p>Chorizo: ${chorizo}</p>
    <p>Morcilla: ${morcilla.toFixed(2)} kg</p>
    <p>Gaseosa: ${gaseosa} lt</p>
    ${incluirPan ? `<p>Pan: ${pan}</p>` : ''}
    ${incluirEnsaladas ? `
        <p>Tomate: ${tomate}</p>
        <p>Huevo: ${huevo}</p>
        <p>Lechuga: ${lechuga.toFixed(2)} kg</p>
    ` : ''}
    `;
    });
