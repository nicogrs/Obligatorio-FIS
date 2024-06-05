const Utils = require('../models/utils.js');

describe('Clase Utils', () => {
  test('Debe crear una instancia valida de Date', () => {
    const fecha = '2023-12-30';
    const hora = '17:30';
    const nuevaDate = Utils.createDate(fecha, hora);
    expect(nuevaDate instanceof Date).toBe(true);
  });

  test('Creacion de Date', () => {
    const fecha = '2023-12-30';
    const hora = '17:30';
    // Accion
    const nuevaDate = Utils.createDate(fecha, hora);
    const dateEsperado = new Date('2023-12-30T17:30:00.000Z');
    expect(nuevaDate).toEqual(dateEsperado);
  });
});
