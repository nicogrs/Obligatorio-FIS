const Flete = require('../models/flete.js');

describe('Clase Flete', () => {
  test('Creación de una nueva instancia de Flete', () => {
    const nuevoFlete = new Flete(
        '4000',
        '2023-12-20',
        '11:30',
        '2023-12-21',
        '15:00',
        '003',
        '0001',
        '18 de Julio 123',
        'Cuareim 321',
        'Roberto Martinez',
        'Sin descrip.',
    );

    expect(nuevoFlete instanceof Flete).toBe(true);
    expect(nuevoFlete.id).toBe('4000');
    expect(nuevoFlete.tipoTrabajo).toBe('Flete');
    expect(nuevoFlete.fechaInicio).toBe('2023-12-20');
    expect(nuevoFlete.horaInicio).toBe('11:30');
    expect(nuevoFlete.fechaFin).toBe('2023-12-21');
    expect(nuevoFlete.horaFin).toBe('15:00');
    expect(nuevoFlete.camion).toBe('003');
    expect(nuevoFlete.conductor).toBe('0001');
    expect(nuevoFlete.descripcion).toBe('Sin descrip.');
    expect(nuevoFlete.estadoTrabajo).toBe('Planificado');
    expect(nuevoFlete.estadoPago).toBe('PENDIENTE');
    expect(nuevoFlete.direccionIni).toBe('18 de Julio 123');
    expect(nuevoFlete.direccionFin).toBe('Cuareim 321');
    expect(nuevoFlete.nombre).toBe('Roberto Martinez');
  });

  test('Método direccionToString', () => {
    const nuevoFlete = new Flete(
        '4001',
        '2023-12-20',
        '11:30',
        '2023-12-21',
        '15:00',
        '003',
        '0001',
        '18 de Julio 123',
        'Cuareim 321',
        'Roberto Martinez',
        'Sin descrip.',
    );

    const strObtenido = nuevoFlete.direccionToString();
    const strEsperado = '18 de Julio 123, Cuareim 321';
    expect(strObtenido).toBe(strEsperado);
  });
});
