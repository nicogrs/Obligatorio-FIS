class Camion {
  id;
  modelo;
  matricula;
  fecha;

  constructor(id, modelo, matricula, fecha) {
    this.id = id;
    this.modelo = modelo;
    this.matricula = matricula;
    this.fecha = fecha;
  };

  toString() {
    return `${this.modelo} ${this.matricula}`;
  }
}

module.exports = Camion;
