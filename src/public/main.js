document.addEventListener('DOMContentLoaded', function() {
  // Función para obtener los parámetros de la URL
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Verificar si existe el parámetro 'exito' en la URL
  const exitoParametro = getParameterByName('exito');

  // Si 'exito' está presente y es igual a 'true', mostrar el modal
  if (exitoParametro === 'true') {
    const modal = new bootstrap.Modal(
        document.getElementById('trabajoCreadoExito'));
    modal.show();
  } else if (exitoParametro === 'false') {
    const modal = new bootstrap.Modal(
        document.getElementById('trabajoCreadoError'));
    modal.show();
  }
});
