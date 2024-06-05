const Reparto = require('../models/reparto.js');

describe('Clase Reparto', () => {
  test('Creación de una nueva instancia de Reparto', () => {
    const dirs = [
      {name: 'Cliente 1', dir: 'Direc1'},
      {name: 'Cliente 2', dir: 'Direc2'},
    ];
    const nuevoReparto = new Reparto(
        '4000',
        '2023-12-20',
        '11:30',
        '2023-12-21',
        '15:00',
        '003',
        '0001',
        dirs,
        'Sin descrip.',
    );

    expect(nuevoReparto instanceof Reparto).toBe(true);
    expect(nuevoReparto.id).toBe('4000');
    expect(nuevoReparto.tipoTrabajo).toBe('Reparto');
    expect(nuevoReparto.fechaInicio).toBe('2023-12-20');
    expect(nuevoReparto.horaInicio).toBe('11:30');
    expect(nuevoReparto.fechaFin).toBe('2023-12-21');
    expect(nuevoReparto.horaFin).toBe('15:00');
    expect(nuevoReparto.camion).toBe('003');
    expect(nuevoReparto.conductor).toBe('0001');
    expect(nuevoReparto.descripcion).toBe('Sin descrip.');
    expect(nuevoReparto.estadoTrabajo).toBe('Planificado');
    expect(nuevoReparto.estadoPago).toBe('PENDIENTE');
    expect(nuevoReparto.direcciones).toEqual(dirs);
  });

  test('Método direccionToString', () => {
    const dirs = [
      {name: 'Cliente S.A.', dir: 'Ellauri 123'},
      {name: 'Cliente Ltda.', dir: 'Sarmiento 5543'},
    ];
    const nuevoReparto = new Reparto(
        '4001',
        '2023-12-20',
        '11:30',
        '2023-12-21',
        '15:00',
        '003',
        '0001',
        dirs,
        'Sin descrip.',
    );

    const strObtenido = nuevoReparto.direccionToString();
    const strEsperado = 'Ellauri 123, Sarmiento 5543';
    // const strEsperado = '';

    expect(strObtenido).toBe(strEsperado);
  });
});
