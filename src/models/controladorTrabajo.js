/* eslint-disable max-len */
const Flete = require('./flete');
const Reparto = require('./reparto');
const Camion = require('./camion');
const Chofer = require('./chofer');
const {estadoTrabajo} = require('./enumerados');
const Utils = require('./utils.js');
// const iniciador = require('../public/iniciador.js');

const arrTrabajos = [];
const arrCamiones = [];
const arrChoferes = [];

let contadorId = 4062;

function cargarDatosPorDefecto() {
  contadorId = 4062;

  const camion1 = new Camion('001', 'Volkswagen', 'ABC 1234', '20-12-2011');
  const camion2 = new Camion('002', 'JAC', 'NOA 3442', '30-09-2020');
  const camion3 = new Camion('003', 'JMC', 'LAP 5622', '20-04-2016');
  const camion4 = new Camion('004', 'Mercedes Benz', 'STX 5433', '01-06-2015');

  const chofer1 = new Chofer(
      '0001',
      'Juan Martinez',
      36,
      'Medica Uruguaya',
      '097561331',
  );
  const chofer2 = new Chofer(
      '0002',
      'Hernesto Rodriguez',
      25,
      'Medica Uruguaya',
      '096119751',
  );
  const chofer3 = new Chofer(
      '0003',
      'Gabriel Machado',
      55,
      'Casmu',
      '094115332',
  );
  const chofer4 = new Chofer('0004', 'Carlos Sagrado', 45, 'SMI', '093221562');

  const flete1 = new Flete(
      '4057',
      '2023-12-01',
      '10:00',
      '2023-12-01',
      '12:00',
      '001',
      '0001',
      '18 de Julio 1234',
      'Bv. Artigas 223 esq. Magallanes',
      'Supermercado Tata',
      'Sin desc',
  );
  const flete2 = new Flete(
      '4058',
      '2023-12-02',
      '11:00',
      '2023-12-02',
      '15:00',
      '004',
      '0002',
      '8 de Octubre 3112',
      'Ellauri 542',
      'Supermercado Disco',
      'Llamar antes de llegar',
  );
  const flete3 = new Flete(
      '4059',
      '2023-12-03',
      '12:00',
      '2023-12-03',
      '14:00',
      '003',
      '0003',
      'Zabala 234 esq. Rincón',
      'Mercedes esq. Lima',
      'Supermercado Tata',
      'Sin desc',
  );

  const dummyDirs1 = [
    {name: 'Cliente 1', dir: 'Ellauri 567'},
    {name: 'Cliente 2', dir: 'Mercedes 621'},
    {name: 'Cliente 3', dir: 'Canelones 998'},
  ];
  const dummyDirs2 = [
    {name: 'Cliente 1', dir: 'Lima 228'},
    {name: 'Cliente 2', dir: 'Miguelete 5543'},
    {name: 'Cliente 3', dir: 'Canelones 998'},
  ];
  const dummyDirs3 = [
    {name: 'Cliente 1', dir: 'Sarandi 906'},
    {name: 'Cliente 2', dir: 'Zabala 422'},
    {name: 'Cliente 3', dir: 'Sarmiento 5991'},
  ];

  const reparto1 = new Reparto(
      '4060',
      '2023-12-02',
      '10:00',
      '2023-12-02',
      '22:00',
      '001',
      '0003',
      dummyDirs1,
      'Llamar al completar todo',
  );
  const reparto2 = new Reparto(
      '4061',
      '2023-12-08',
      '18:00',
      '2023-12-08',
      '23:00',
      '002',
      '0002',
      dummyDirs2,
      'Llamar al completar todo',
  );
  const reparto3 = new Reparto(
      '4062',
      '2023-12-09',
      '19:00',
      '2023-12-09',
      '00:00',
      '001',
      '0001',
      dummyDirs3,
      'Llamar al completar todo',
  );

  // reparto3.cambiarEstadoTrabajo();
  reparto3.setEstadoTrabajo(estadoTrabajo.EN_CURSO);

  // eslint-disable-next-line prefer-const
  arrTrabajos.splice(0, arrTrabajos.length);
  arrTrabajos.push(flete1);
  arrTrabajos.push(flete2);
  arrTrabajos.push(flete3);

  arrCamiones.splice(0, arrCamiones.length);
  arrCamiones.push(camion1);
  arrCamiones.push(camion2);
  arrCamiones.push(camion3);
  arrCamiones.push(camion4);

  arrChoferes.splice(0, arrChoferes.length);
  arrChoferes.push(chofer1);
  arrChoferes.push(chofer2);
  arrChoferes.push(chofer3);
  arrChoferes.push(chofer4);

  arrTrabajos.push(reparto1);
  arrTrabajos.push(reparto2);
  arrTrabajos.push(reparto3);

  ordenarArregloTrabajo();
}

function agregarTrabajo(obj) {
  const ret = 'Trabajo agregado';

  const fechaInicio = obj.fechaIni;
  const horaInicio = obj.horaIni;
  const fechaFin = obj.fechaFin;
  const horaFin = obj.horaFin;
  const camion = obj.camion;
  const chofer = obj.chofer;
  const desc = obj.desc;
  const id = this.getContadorNext();

  if (obj.tipo == 'flete') {
    const cliente = obj.nomCliente;
    const direccionIni = obj.direccionIni;
    const direccionFin = obj.direccionFin;
    agregarFlete(id, fechaInicio, horaInicio, fechaFin, horaFin, camion, chofer, direccionIni, direccionFin, cliente, desc);
  } else {
    const dirs = obj.clientes;
    agregarReparto(id, fechaInicio, horaInicio, fechaFin, horaFin, camion, chofer, dirs, desc);
  }
  ordenarArregloTrabajo();
  return ret;
};

function buscarElemEnArrayID(arr, id) {
  return arr.find((item) => item.id === id);
}

function buscarTrabajoID(id) {
  const ret = buscarElemEnArrayID(arrTrabajos, id);
  return ret;
}

function actualizarTrabajo(id, campo, valor) {
  if (campo === 'camion') {
    const estado = buscarTrabajoID(id).estadoTrabajo;
    if (estado === estadoTrabajo.REALIZADO || estado === estadoTrabajo.CANCELADO) {
      throw new Error(`No se puede editar un camion de un trabajo con estado ${estado}`);
    } else {
      const fechaInicio = buscarTrabajoID(id).fechaInicio;
      const horaInicio = buscarTrabajoID(id).horaInicio;
      const fechaFin = buscarTrabajoID(id).fechaFin;
      const horaFin = buscarTrabajoID(id).horaFin;
      validarCamion(valor, fechaInicio, horaInicio, fechaFin, horaFin);
      buscarTrabajoID(id).setCamion(valor);
      return `El camión del trabajo ${id} se cambió correctamente`;
    }
  } else {
    buscarTrabajoID(id).setEstadoTrabajo(valor);
    return `El estado del trabajo ${id} se cambió correctamente`;
  }
}

function buscarCamionID(id) {
  const ret = buscarElemEnArrayID(arrCamiones, id);
  return ret;
}

function buscarChoferID(id) {
  const ret = buscarElemEnArrayID(arrChoferes, id);
  return ret;
}

function getContadorNext() {
  contadorId = contadorId + 1;
  return contadorId.toString();
}

function agregarFlete(id, fechaInicio, horaInicio, fechaFin, horaFin, camion, cond, dirIni, dirFin, nom, desc) {
  validarId(id);
  validarFechaInicioMenor(fechaInicio, horaInicio, fechaFin, horaFin);
  validarCamion(camion, fechaInicio, horaInicio, fechaFin, horaFin);
  validarConductor(cond, fechaInicio, horaInicio, fechaFin, horaFin);

  const nvoFlete = new Flete(
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
  );
  arrTrabajos.push(nvoFlete);
};


function agregarReparto(id, fechaInicio, horaInicio, fechaFin, horaFin, camion, cond, dirs, desc) {
  // try {
  validarId(id);
  validarFechaInicioMenor(fechaInicio, horaInicio, fechaFin, horaFin);
  validarCamion(camion, fechaInicio, horaInicio, fechaFin, horaFin);
  validarConductor(cond, fechaInicio, horaInicio, fechaFin, horaFin);

  const nvoReparto = new Reparto(
      id,
      fechaInicio,
      horaInicio,
      fechaFin,
      horaFin,
      camion,
      cond,
      dirs,
      desc,
  );
  arrTrabajos.push(nvoReparto);
};

function validarId(id) {
  // if (arrTrabajos.filter((trabajo) => trabajo.id === id).length > 0) {
  if (arrTrabajos.findIndex((item) => item.id === id) != -1) {
    throw new Error('El trabajo con id: ' + id + ' ya existe');
  }
};

function validarFechaInicioMenor(fechaInicio, horaInicio, fechaFin, horaFin) {
  const fechaIni = Utils.createDate(fechaInicio, horaInicio);
  const fechaF = Utils.createDate(fechaFin, horaFin);
  if (fechaIni > fechaF) {
    throw new Error('La fecha de inicio no puede ser mayor a la fecha de fin');
  }
};


function validarCamion(idCamion, fechaInicio, horaInicio, fechaFinal, horaFinal) {
  const iniTrabajoAgregar = Utils.createDate(fechaInicio, horaInicio);
  const finTrabajoAgregar = Utils.createDate(fechaFinal, horaFinal);
  arrTrabajos.forEach((trabajo) => {
    const iniTrabajoCreado = Utils.createDate(trabajo.fechaInicio, trabajo.horaInicio);
    const finTrabajoCreado = Utils.createDate(trabajo.fechaFin, trabajo.horaFin);
    const validarSolap = validarInclusionFechas(iniTrabajoAgregar, finTrabajoAgregar, iniTrabajoCreado, finTrabajoCreado);
    if (validarSolap && trabajo.camion === idCamion) {
      throw new Error('El camión: ' + buscarCamionID(idCamion) + ' ya esta asignado a un trabajo en ese horario');
    }
  });
}

function validarConductor(idConductor, fechaInicio, horaInicio, fechaFinal, horaFinal) {
  const iniTrabajoAgregar = Utils.createDate(fechaInicio, horaInicio);
  const finTrabajoAgregar = Utils.createDate(fechaFinal, horaFinal);
  arrTrabajos.forEach((trabajo) => {
    const iniTrabajoCreado = Utils.createDate(trabajo.fechaInicio, trabajo.horaInicio);
    const finTrabajoCreado = Utils.createDate(trabajo.fechaFin, trabajo.horaFin);
    const validarSolap = validarInclusionFechas(iniTrabajoAgregar, finTrabajoAgregar, iniTrabajoCreado, finTrabajoCreado);
    if (validarSolap && trabajo.conductor === idConductor) {
      throw new Error('El conductor: ' + buscarChoferID(idConductor) + ' ya esta asignado a un trabajo en ese horario');
    }
  });
};

function validarInclusionFechas(iniTrabajoAgregar, finTrabajoAgregar, iniTrabajoCreado, finTrabajoCreado) {
  const incluyeInicio = (iniTrabajoAgregar <= iniTrabajoCreado && iniTrabajoCreado <= finTrabajoAgregar);
  const incluyeFinal = (iniTrabajoAgregar <= finTrabajoCreado && finTrabajoCreado <= finTrabajoAgregar);
  const incluyeTotal = (iniTrabajoCreado <= iniTrabajoAgregar && finTrabajoAgregar <= finTrabajoCreado);
  return incluyeInicio || incluyeFinal || incluyeTotal;
};


function ordenarArregloTrabajo() {
  arrTrabajos.sort((a, b) =>
    a.fechaInicio.localeCompare(b.fechaInicio) ||
    a.horaInicio.replace(':', '') - b.horaInicio.replace(':', ''),
  );
};


function filtrarTrabajosPorEstado(estado) {
  return arrTrabajos.filter((trabajo) => trabajo.estadoTrabajo === estado);
};

/**
 * Recibe un arreglo con trabajos y devuelve una lista con los trabajos,
 * en donde se reemplaza en los atributos camion, conductor y direcciones
 * con los valores ya prontos para mostrar en pantalla, y no tener que
 * procesarlos en el archivo .ejs
 *
 * @param {Trabajos[]} arr - Un arreglo de trabajos
 * @return {Array<Object>} - Un arreglo de objetos con trabajos para mostrar
 * */
function getListaTrabajosCompleta(arr) {
  const ret = [];
  arr.forEach((item) => {
    const camion = buscarCamionID(item.camion);
    const chofer = buscarChoferID(item.conductor);

    const add = JSON.parse(JSON.stringify(item));
    // add.horaInicio = item.getHoraIniString();
    // add.horaFin = item.getHoraFinString();
    // Si es de tipo flete, va a contener direccionInicio y direccionFinal
    // Si es de tipo Reparto, se crea una lista de {name: ... , dir: ...}
    if (item.tipoTrabajo == 'Flete') {
      add.direccionIni = item.direccionIni;
      add.direccionFin = item.direccionFin;
    } else {
      add.direcciones = [];
      item.direcciones.forEach((elem) => {
        const str = elem.name + ': ' + elem.dir;
        add.direcciones.push(str);
      });
    }
    add.direccion = item.direccionToString();
    add.camion = camion.toString();
    add.conductor = chofer.toString();

    ret.push(add);
  });
  return ret;
}


module.exports = {
  arrTrabajos,
  arrCamiones,
  arrChoferes,
  agregarTrabajo,
  cargarDatosPorDefecto,
  agregarReparto,
  agregarFlete,
  getContadorNext,
  ordenarArregloTrabajo,
  filtrarTrabajosPorEstado,
  validarFechaInicioMenor,
  validarCamion,
  validarConductor,
  validarInclusionFechas,
  actualizarTrabajo,
  buscarTrabajoID,
  buscarChoferID,
  buscarCamionID,
  buscarElemEnArrayID,
  getListaTrabajosCompleta,
};
