const enums = require('./enumerados');

const enumTrabajo = enums.estadoTrabajo;
const enumPago = enums.estadoPago;

class Trabajo {
  id;
  fechaInicio;
  horaInicio;
  fechaFin;
  horaFin;
  tipoTrabajo;
  camion;
  conductor;
  estadoTrabajo;
  estadoPago;
  descripcion;

  // eslint-disable-next-line max-len
  constructor(id, fechaInicio, horaInicio, fechaFin, horaFin, camion, cond, tipo, desc) {
    this.id = id;
    this.fechaInicio = fechaInicio;
    this.horaInicio = horaInicio;
    this.fechaFin = fechaFin;
    this.horaFin = horaFin;
    this.tipoTrabajo = tipo;
    this.camion = camion;
    this.conductor = cond;
    this.descripcion = desc;
    this.estadoTrabajo = enumTrabajo.PLANIFICADO;
    this.estadoPago = enumPago.PENDIENTE;
  };

  setCamion(camion) {
    this.camion = camion;
  }

  setEstadoTrabajo(estado) {
    this.estadoTrabajo = estado;
  }

  // cambiarEstadoTrabajo() {
  //   if (this.estadoTrabajo === enumTrabajo.PLANIFICADO) {
  //     this.estadoTrabajo = enumTrabajo.EN_CURSO;
  //   } else if (this.estadoTrabajo === enumTrabajo.EN_CURSO) {
  //     this.estadoTrabajo = enumTrabajo.REALIZADO;
  //   }
  // };

  // cancelarTrabajo() {
  //   this.estadoTrabajo = enumTrabajo.CANCELADO;
  // }

  // getId() {
  //   return this.id;
  // }

  // getHoraIniString() {
  //   // return this.horaInicio.slice(0, -2) + ':' + this.horaInicio.slice(-2);
  //   return this.horaInicio;
  // }

  // getHoraFinString() {
  //   // return this.horaFin.slice(0, -2) + ':' + this.horaFin.slice(-2);
  //   return this.horaFin;
  // }

  // getFechaIniString() {
  //   return this.fechaInicio;
  // }

  // getFechaFinString() {
  //   return this.fechaFin;
  // }
}

module.exports = Trabajo;
