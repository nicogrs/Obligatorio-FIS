/* eslint-disable max-len */
const controladorTrabajo = require('../models/controladorTrabajo');
const enums = require('../models/enumerados');
const requestParser = require('../models/requestParser');

controladorTrabajo.cargarDatosPorDefecto();

module.exports = {
  controladorTrabajo,
  enums,
  requestParser,
};


