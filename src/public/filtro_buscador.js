const searchInput = document.getElementById('myInput');
const table = document.getElementById('myTable');
const rows = table.getElementsByTagName('tr');

searchInput.addEventListener('input', function() {
  const filter = searchInput.value.toUpperCase();
  for (let i = 1; i < rows.length; i++) { // Start at 1 to skip the header row
    let found = false;
    const cells = rows[i].getElementsByTagName('td');
    for (let j = 0; j < cells.length; j++) {
      const cellText = cells[j].textContent || cells[j].innerText;
      if (cellText.toUpperCase().indexOf(filter) > -1) {
        found = true;
        break;
      }
    }
    rows[i].style.display = found ? '' : 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const usernameInputs = document.
      querySelectorAll('button[name="btn_detalle"]');
  usernameInputs.forEach((input) => {
    input.addEventListener('change', function() {
      // console.log(`Value changed: ${input.value}`);
    });
  });
  // Obtengo todos los botones .btn_success
  const buttons = document.querySelectorAll('.btn-success');
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      // const modalTitle = document.querySelector('#exampleModalLabel');
      // const modalBody = document.querySelector('.modal-body');

      // const info1 = this.getAttribute('data-info1');
      // console.log(info1);
      // const info2 = this.getAttribute('data-info2');
      // console.log(info2);

      // modalTitle.textContent = "Detalles";
      // modalBody.innerHTML = `<p>${info1}</p>`;


      // const object = {};
      // formData.forEach((value, key) => object[key] = value);
      // const json = JSON.stringify(object);

      const value = this.getAttribute('data_id');
      // console.log('data_id: ' + value);
      // object['trabajo_id'] = this.getAttribute('data_id');
      // const json = JSON.stringify(object);
      const text = '{"trabajo_id":"' + value + '"}';
      const _json = JSON.stringify(JSON.parse(text));


      // console.log('JSON: ' + _json);
      // console.log(this.getAttribute('data_id'));

      // console.log(object);

      fetch('/post_detalle_trabajo', {
        method: 'POST',
        body: _json,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => response.text())
          .then((data) => {
            // console.log(data);
            document.getElementById('modal-content').innerHTML = data;
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
          });
    });
  });
});

/* Comportamiento boton EDITAR */
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn-info');
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      const value = this.getAttribute('data_id');
      // console.log('data_id: ' + value);

      fetch(`/proc_editar?data=${value}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // If the response is okay, redirect
            window.location.href = response.url;
          })
          .catch((error) => {
            console.error('Problemas con la opreacion fetch:',
                error);
            // Handle errors, e.g., show a message to the user
            // alert('Failed to process request. Please try again.');
          });
      // window.location.href = `/proc_editar?data=${value}`;
    });
  });
});
