document.getElementById('calcular').addEventListener('click', function() {
    const form = document.getElementById('formulario');
    const precio = parseFloat(form.precio.value);
    const cuotas = parseInt(form.cuotas.value);
  
    let valorCuota = precio;
  
    if (cuotas === 6 || cuotas === 9) {
      valorCuota *= 1.5;
    } else if (cuotas === 12) {
      valorCuota *= 1.4;
    }
  
    const valorCuotas = document.getElementById('valorCuotas');
    valorCuotas.innerHTML = `
      <h2>Valor de las Cuotas:</h2>
      <p>${cuotas} cuotas de $${valorCuota.toFixed(2)}</p>
    `;
  });