const enums = require('../models/enumerados.js');

const estadoTrabajo = enums.estadoTrabajo;
const estadoPago = enums.estadoPago;

describe('Test de enumerados', () => {
  test('enumerado estadoTrabajo', () => {
    expect(estadoTrabajo.PLANIFICADO).toBe('Planificado');
    expect(estadoTrabajo.EN_CURSO).toBe('En Curso');
    expect(estadoTrabajo.REALIZADO).toBe('Realizado');
    expect(estadoTrabajo.CANCELADO).toBe('Cancelado');
  });

  test('enumerado estadoPago', () => {
    expect(estadoPago.PENDIENTE).toBe('PENDIENTE');
    expect(estadoPago.PAGADO).toBe('PAGADO');
  });
});
