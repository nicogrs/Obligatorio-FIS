/* eslint-disable max-len */
const Camion = require('../models/camion.js');

describe('Clase Camion', () => {
  test('Creacion de nueva instancia de Camion', () => {
    const nuevoCamion = new Camion(
        '001',
        'Cargo 123',
        'ABC 1234',
        '2023-11-30',
    );

    expect(nuevoCamion instanceof Camion).toBe(true);
    expect(nuevoCamion.id).toBe('001');
    expect(nuevoCamion.modelo).toBe('Cargo 123');
    expect(nuevoCamion.matricula).toBe('ABC 1234');
    expect(nuevoCamion.fecha).toBe('2023-11-30');
  });

  test('Método toString', () => {
    const nuevoCamion = new Camion(
        '002',
        'Robust',
        'ABC 1235',
        '2023-11-25',
    );
    const strEsperado = 'Robust ABC 1235';
    const strObtenido = nuevoCamion.toString();
    expect(strObtenido).toBe(strEsperado);
  });
});
