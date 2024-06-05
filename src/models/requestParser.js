// Crea un objeto con los datos del request
function parseReqCrearTrabajo(req) {
  object = {};
  object.tipo = req.body['tipo_trabajo'];
  if (object.tipo == 'flete') {
    object.fechaIni = req.body['flete_fechaIni'];
    object.horaIni = req.body['flete_horaIni'];
    object.fechaFin = req.body['flete_fechaFin'];
    object.horaFin = req.body['flete_horaFin'];
    object.camion = req.body['flete_camion'];
    object.chofer = req.body['flete_chofer'];
    object.desc = req.body['flete_desc'];
    object.nomCliente = req.body['flete_nomCliente'];
    object.direccionIni = req.body['flete_direccionIni'];
    object.direccionFin = req.body['flete_direccionFin'];
  } else {
    object.fechaIni = req.body['rep_fechaIni'];
    object.horaIni = req.body['rep_horaIni'];
    object.fechaFin = req.body['rep_fechaFin'];
    object.horaFin = req.body['rep_horaFin'];
    object.camion = req.body['rep_camion'];
    object.chofer = req.body['rep_chofer'];
    object.desc = req.body['rep_desc'];
    object.clientes = req.body['clientes'];
  }
  return object;
}

module.exports = {parseReqCrearTrabajo};
