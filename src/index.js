const express = require('express');
const path = require('path');
const init = require('../public/iniciador');
const estadoTrabajo = init.enums.estadoTrabajo;

const app = express();

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const ctrl = init.controladorTrabajo;
  let arrTrabajosEnCurso = ctrl.filtrarTrabajosPorEstado(estadoTrabajo.EN_CURSO);
  let arrTrabajosPlanificados = ctrl.filtrarTrabajosPorEstado(estadoTrabajo.PLANIFICADO);
  arrTrabajosEnCurso = ctrl.getListaTrabajosCompleta(arrTrabajosEnCurso);
  arrTrabajosPlanificados = ctrl.getListaTrabajosCompleta(arrTrabajosPlanificados);
  res.render('index', {
    trabajosEnProceso: arrTrabajosEnCurso,
    trabajosPendientes: arrTrabajosPlanificados,
    listaCamiones: init.controladorTrabajo.arrCamiones,
    listaChoferes: init.controladorTrabajo.arrChoferes,
    mensajeExito: '',
    mensajeError: '',
  });
});

module.exports = app;
