/* eslint-disable max-len */
const express = require('express');
const path = require('path');
const init = require('./public/iniciador');
// const reqParse = require('./models/requestParser');
// const {arrTrabajos} = require('./models/controladorTrabajo');
// const {actualizarTrabajo} = require('./models/controladorTrabajo');

// const fs = require('fs');
// const {get} = require('http');
// const {stringify} = require('querystring');
const estadoTrabajo = init.enums.estadoTrabajo;

// express app
const app = express();

// listen for requests
app.listen(3000);
const arrTrabajos = init.controladorTrabajo.arrTrabajos;
const listaCamiones = init.controladorTrabajo.arrCamiones;
const listaChoferes = init.controladorTrabajo.arrChoferes;
const actualizarTrabajo = init.controladorTrabajo.actualizarTrabajo;
const reqParse = init.requestParser;

app.use('/public', express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// register view engine
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
    listaCamiones,
    listaChoferes,
    mensajeExito: '',
    mensajeError: '',
  });
});

app.get('/buscador_trabajo', (req, res) => {
  const items = init.controladorTrabajo.getListaTrabajosCompleta(arrTrabajos);
  res.render('buscador_trabajo', {datos: items});
});
app.get('/trabajo', (req, res) => {
  res.render('crear_trabajo', {listaCamiones, listaChoferes});
});

app.get('/crear_trabajo', (req, res) => {
  res.render('editor_trabajo', {trabajo: item});
});

app.get('/tabla_camiones', (req, res) => {
  res.render('tabla_camiones', {listaCamiones});
});

app.get('/tabla_choferes', (req, res) => {
  res.render('tabla_choferes', {listaChoferes});
});

app.post('/trabajo', (req, res) => {
  try {
    const obj = reqParse.parseReqCrearTrabajo(req);
    const ret = init.controladorTrabajo.agregarTrabajo(obj);
    res.json({success: true, data: ret});
  } catch (error) {
    const err = error.message;
    console.error('Error controlado:', err);
    res.status(200).json({success: false, error: err});
  }
});

app.post('/post_detalle_trabajo', (req, res) => {
  const ejsFilePath = path.join(__dirname, 'views',
      'partials', 'modal_detalle_trabajos.ejs');

  const data = req.body.trabajo_id;
  const arr = init.controladorTrabajo.getListaTrabajosCompleta(arrTrabajos);
  const getted = init.controladorTrabajo.buscarElemEnArrayID(arr, data);

  const params = {trabajo: getted};
  res.render(ejsFilePath, params, (err, data) => {
    if (err) {
      res.status(500).send('Error al cargar el recurso.');
      return;
    }
    res.send(data);
  });
});

app.get('/proc_editar', (req, res) => {
  const data = req.query.data;
  res.redirect(`/editor_trabajo?data=${data}`);
});

app.get('/editor_trabajo', (req, res) => {
  try {
    const data = req.query.data;
    const trabajoGet = init.controladorTrabajo.buscarTrabajoID(data);
    const chofer = init.controladorTrabajo.buscarChoferID(trabajoGet.conductor);
    console.log('chofer' + chofer);
    const ests = Object.values(init.enums.estadoTrabajo);
    const params = {
      trabajo: trabajoGet,
      estados: ests,
      camiones: listaCamiones,
      chofer: chofer,
    };
    res.render('editor_trabajo', params);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// post_actualizar_trabajo
app.post('/editor_trabajo', (req, res) => {
  const ctrl = init.controladorTrabajo;
  try {
    let respuesta = '';
    if (req.body.hasOwnProperty('estadoTrabajo')) {
      const estado = ctrl.buscarTrabajoID(req.body.trabajoID).estadoTrabajo;
      if (estado === req.body.estadoTrabajo) {
        throw new Error('El estado del trabajo ya es el seleccionado.');
      } else {
        respuesta = actualizarTrabajo(
            req.body.trabajoID,
            'estadoTrabajo',
            req.body.estadoTrabajo,
        );
      }
    } else if (req.body.hasOwnProperty('camion')) {
      const camion = ctrl.buscarTrabajoID(req.body.trabajoID).camion;
      if (camion === req.body.camion) {
        throw new Error('El camión del trabajo ya es el seleccionado.');
      }
      respuesta = actualizarTrabajo(
          req.body.trabajoID,
          'camion',
          req.body.camion,
      );
    }
    const arrTrabajosEnCurso = ctrl.getListaTrabajosCompleta(
        ctrl.filtrarTrabajosPorEstado(estadoTrabajo.EN_CURSO));
    const arrTrabajosPlanificados = ctrl.getListaTrabajosCompleta(
        ctrl.filtrarTrabajosPorEstado(estadoTrabajo.PLANIFICADO));
    res.render('index', {
      trabajosEnProceso: arrTrabajosEnCurso,
      trabajosPendientes: arrTrabajosPlanificados,
      listaCamiones,
      listaChoferes,
      mensajeExito: respuesta,
      mensajeError: '',
    });
  } catch (error) {
    const arrTrabajosEnCurso = ctrl.getListaTrabajosCompleta(
        ctrl.filtrarTrabajosPorEstado(estadoTrabajo.EN_CURSO));
    const arrTrabajosPlanificados = ctrl.getListaTrabajosCompleta(
        ctrl.filtrarTrabajosPorEstado(estadoTrabajo.PLANIFICADO));
    const mensajeError = error.message;
    res.render('index', {
      trabajosEnProceso: arrTrabajosEnCurso,
      trabajosPendientes: arrTrabajosPlanificados,
      listaCamiones,
      listaChoferes,
      mensajeExito: '',
      mensajeError: mensajeError,
    });
  }
});
