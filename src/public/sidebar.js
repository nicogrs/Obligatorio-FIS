function updateSidebarVisibility() {
  const sidebar = document.getElementById('navbarNav');

  if (window.innerWidth >= 768) { // Pantalla igual o mayor que md (768px)
    sidebar.classList.add('show');
  } else {
    sidebar.classList.remove('show');
  }
}

// eslint-disable-next-line max-len
// Ejecutar la función cuando se carga la página y cuando se cambia el tamaño de la ventana
window.addEventListener('load', updateSidebarVisibility);
window.addEventListener('resize', updateSidebarVisibility);
