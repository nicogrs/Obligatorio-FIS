const tipoTrabajoSelect = document.getElementById('tipoTrabajo');
const fleteContent = document.getElementById('fleteContent');
const repartoContent = document.getElementById('repartoContent');
const formulario = document.getElementById('formulario');

// eslint-disable-next-line max-len
// Adicional: También puedes agregar la lógica de cambio directamente para sincronizar el estado inicial/ tipoTrabajoSelect.addEventListener('change', function() {
tipoTrabajoSelect.addEventListener('change', function() {
  const inputs = formulario.querySelectorAll('input');
  inputs.forEach((input) => {
    input.value = '';
  });
  if (tipoTrabajoSelect.value === 'flete') {
    fleteContent.style.display = 'block';
    repartoContent.style.display = 'none';
  } else if (tipoTrabajoSelect.value === 'reparto') {
    fleteContent.style.display = 'none';
    repartoContent.style.display = 'block';
  } else if (tipoTrabajoSelect.value === 'seleccionar') {
    fleteContent.style.display = 'none';
    repartoContent.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const destinosReparto = document.getElementById('destinosReparto');
  const agregarClienteButton = document.getElementById('agregarCliente');
  const agregarDestinoButton = document.getElementById('agregarDestino');
  const camposDestino = document.getElementById('camposDestino');
  const submitFlete = document.getElementById('submit_flete');
  const submitReparto = document.getElementById('submit_reparto');
  const formularioReparto = document.getElementById('form_alta_reparto');
  const formularioFlete = document.getElementById('form_alta_flete');
  const validarBtnFlete = document.getElementById('abrirModalFlete');
  const validarBtnReparto = document.getElementById('abrirModalReparto');
  const mensajeModalFlete = new bootstrap.Modal(
      document.getElementById('confirmarModalFlete'),
  );
  const mensajeModalReparto = new bootstrap.Modal(
      document.getElementById('confirmarModalReparto'),
  );


  validarBtnFlete.addEventListener('click', function() {
    if (formularioFlete.checkValidity()) {
      mensajeModalFlete.show();
      // console.log('El formulario es válido.');
    } else {
      // Realiza acciones si el formulario no es válido
      formularioFlete.reportValidity();
    }
  });

  validarBtnFlete.addEventListener('click', function() {
    if (formularioFlete.checkValidity()) {
      mensajeModalFlete.show();
      // console.log('El formulario es válido.');
    } else {
      // Realiza acciones si el formulario no es válido\
      formularioFlete.reportValidity();
    }
  });

  validarBtnReparto.addEventListener('click', function() {
    if (formularioReparto.checkValidity()) {
      mensajeModalReparto.show();
      // console.log('El formulario es válido.');
    } else {
      // Realiza acciones si el formulario no es válido
      formularioReparto.reportValidity();
    }
  });

  fleteContent.style.display = 'none';
  repartoContent.style.display = 'none';

  agregarClienteButton.addEventListener('click', function() {
    camposDestino.style.display = 'block';
  });

  agregarDestinoButton.addEventListener('click', function() {
    const nombreClienteInput = document.getElementById('nombreCliente');
    const direccionClienteInput = document.getElementById('direccionCliente');
    const nombreCliente = nombreClienteInput.value;
    const direccionCliente = direccionClienteInput.value;

    if (nombreCliente && direccionCliente) {
      const row = document.createElement('tr');
      row.innerHTML = `
                        <td>${nombreCliente}</td>
                        <td>${direccionCliente}</td>
                        <td>
                            <button 
                              type="button" 
                              class="btn btn-danger eliminarDestino">
                            Eliminar
                            </button>
                        </td>
                    `;

      destinosReparto.appendChild(row);

      // Ocultar los campos de entrada
      camposDestino.style.display = 'none';

      // Restablecer los valores de los campos de entrada
      nombreClienteInput.value = '';
      direccionClienteInput.value = '';

      // Agregar un controlador de eventos para eliminar el destino
      const eliminarDestinoButtons = row.querySelectorAll('.eliminarDestino');
      eliminarDestinoButtons.forEach((button) => {
        button.addEventListener('click', function() {
          destinosReparto.removeChild(row);
        });
      });
    }
  });

  // ------------------------------------------------------------------------ //

  const minDate = new Date().toISOString().split('T')[0];
  // console.log('minDate: ' + minDate);
  document.getElementById('fechaFleteIni').min = minDate;
  document.getElementById('fechaFleteFin').min = minDate;
  document.getElementById('fechaRepartoIni').min = minDate;
  document.getElementById('fechaRepFin').min = minDate;

  // ------------------------------------------------------------------------ //

  submitReparto.addEventListener('click', function() {
    const formData = new FormData(
        document.getElementById('form_alta_reparto'));

    const object = {};
    object.tipo_trabajo = 'reparto';
    formData.forEach((value, key) => object[key] = value);
    const table = document.getElementById('tablaClientes');
    const rows = table.getElementsByTagName('tr');
    const capturedData = [];
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');

      if (cells.length >= 2) {
        const name = cells[0].innerText;
        const dir = cells[1].innerText;
        capturedData.push({name, dir});
      }
    }
    object.clientes = capturedData;
    const json = JSON.stringify(object);

    enviarPOST(json);
  });

  // ------------------------------------------------------------------------ //

  submitFlete.addEventListener('click', function() {
    const formData = new FormData(
        document.getElementById('form_alta_flete'));

    const object = {};
    object.tipo_trabajo = 'flete';
    formData.forEach((value, key) => object[key] = value);
    const json = JSON.stringify(object);

    enviarPOST(json);
  });

  function enviarPOST(_json) {
    fetch('/trabajo', {
      method: 'POST',
      body: _json,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        const err = `Status: ${response.status}, Text: ${response.statusText}`;
        throw new Error(`Error HTTP! ${err}`);
      }
      return response.json();
    }).then((data) => {
      if (data.success) {
        console.log('entra 1');
        window.location.href = '/?exito=true';
      } else {
        console.log('entra 2');
        const alertError = document.getElementById('alert_div');

        if (data.error) {
          alertError.innerHTML = `
              <div id="alert_error" class="alert alert-danger alert-dismissible 
                fade show" role="alert">
              <strong>Error!</strong> ${data.error}
              <button type="button" class="btn-close" data-bs-dismiss="alert" 
                aria-label="Close"></button>
              </div>`;
          alertError.style.display = 'block';
          window.scrollTo(0, 0);
        } else {
          alertError.style.display = 'none';
        }
      }
    }).catch((error) => {
      console.error('Fetch error:', error);
      const alertError = document.getElementById('alert_div');

      alertError.innerHTML = `
          <div id="alert_error" class="alert alert-danger alert-dismissible 
            fade show" role="alert">
          <strong>Error!</strong> ${error}
          <button type="button" class="btn-close" data-bs-dismiss="alert" 
            aria-label="Close"></button>
          </div>`;
      alertError.style.display = 'block';
      window.scrollTo(0, 0);
    });
  };
});
