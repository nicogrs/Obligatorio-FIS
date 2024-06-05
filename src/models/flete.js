const Trabajo = require('./trabajo.js');

class Flete extends Trabajo {
  direccionIni;
  direccionFin;
  nombre; // nombre de cliente

  constructor(
      id,
      fechaInicio,
      horaInicio,
      fechaFin,
      horaFin,
      camion,
      cond,
      dirIni,
      dirFin,
      nom,
      desc,
  ) {
    super(
        id,
        fechaInicio,
        horaInicio,
        fechaFin,
        horaFin,
        camion,
        cond,
        'Flete',
        desc,
    );
    this.direccionIni = dirIni;
    this.direccionFin = dirFin;
    this.nombre = nom;
  }

  direccionToString() {
    const ret = this.direccionIni + ', ' + this.direccionFin;
    return ret;
  }
}

module.exports = Flete;
