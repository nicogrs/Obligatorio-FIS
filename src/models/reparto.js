const Trabajo = require('./trabajo.js');

class Reparto extends Trabajo {
  direcciones; // arreglo de direcciones
  // direcciones es una lista de { nombre: '', direccion: '' }

  constructor(
      id,
      fechaInicio,
      horaInicio,
      fechaFin,
      horaFin,
      camion,
      cond,
      dirs,
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
        'Reparto',
        desc,
    );
    this.direcciones = dirs;
  }

  direccionToString() {
    let ret = '';
    this.direcciones.forEach((element) => {
      ret = ret + element.dir + ', ';
    });

    ret = ret.slice(0, -2);
    return ret;
  }
}

module.exports = Reparto;
