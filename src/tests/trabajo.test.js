const Trabajo = require('../models/trabajo');
const enums = require('../models/enumerados.js');

describe('Clase Trabajo', () => {
  test('Creacion de una instancia de Trabajo', () => {
    const nuevoTrabajo = new Trabajo(
        '0001',
        '2023-10-11',
        '13:00',
        '2023-10-12',
        '14:00',
        '001',
        '0004',
        'flete',
        'Tocar timbre',
        // enums.estadoTrabajo.PLANIFICADO,
        // enums.estadoPago.PENDIENTE,
    );

    expect(nuevoTrabajo instanceof Trabajo).toBe(true);
    expect(nuevoTrabajo.id).toBe('0001');
    expect(nuevoTrabajo.fechaInicio).toBe('2023-10-11');
    expect(nuevoTrabajo.horaInicio).toBe('13:00');
    expect(nuevoTrabajo.fechaFin).toBe('2023-10-12');
    expect(nuevoTrabajo.horaFin).toBe('14:00');
    expect(nuevoTrabajo.camion).toBe('001');
    expect(nuevoTrabajo.conductor).toBe('0004');
    expect(nuevoTrabajo.descripcion).toBe('Tocar timbre');
    expect(nuevoTrabajo.estadoTrabajo).toBe('Planificado');
    expect(nuevoTrabajo.estadoPago).toBe('PENDIENTE');
  });

  test('Cambiar atributo camión a instancia de trabajo', () => {
    const nuevoTrabajo = new Trabajo(
        '0002',
        '2023-10-11',
        '13:00',
        '2023-10-12',
        '14:00',
        '001',
        '0004',
        'flete',
        'Sin descrip.',
        // enums.estadoTrabajo.PLANIFICADO,
        // enums.estadoPago.PENDIENTE,
    );

    // Accion
    nuevoTrabajo.setCamion('003');

    expect(nuevoTrabajo.camion).toBe('003');
  });

  test('Cambiar atributo estado a instancia de trabajo', () => {
    const nuevoTrabajo = new Trabajo(
        '0002',
        '2023-10-11',
        '13:00',
        '2023-10-12',
        '14:00',
        '001',
        '0004',
        'flete',
        'Sin descrip.',
        // enums.estadoTrabajo.PLANIFICADO,
        // enums.estadoPago.PENDIENTE,
    );

    // Accion
    nuevoTrabajo.setEstadoTrabajo(enums.estadoTrabajo.EN_CURSO);

    expect(nuevoTrabajo.estadoTrabajo).toBe('En Curso');
  });
});
