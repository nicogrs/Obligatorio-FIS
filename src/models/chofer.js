class Chofer {
  id;
  nombre;
  edad;
  sociedad;
  telefono;

  constructor(id, nombre, edad, sociedad, telefono) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.sociedad = sociedad;
    this.telefono = telefono;
  }

  toString() {
    return `${this.nombre}`;
  }
}

module.exports = Chofer;
