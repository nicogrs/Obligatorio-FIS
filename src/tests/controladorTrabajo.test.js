/* eslint-disable max-len */
const controladorTrabajo = require('../models/controladorTrabajo');
const Flete = require('../models/flete');
const Reparto = require('../models/reparto');
const arrTrabajos = controladorTrabajo.arrTrabajos;
// const arrChoferes = controladorTrabajo.arrChoferes;
// const arrCamiones = controladorTrabajo.arrCamiones;
// const Camion = require('../models/camion.js');
// const Chofer = require('../models/chofer.js');
// const iniciador = require('../public/iniciador.js');

let objTrabajos;
let objCamiones;
let objChoferes;

describe('Reseteadores de estructuras', () => {
  describe('cargarDatosPorDefecto', () => {
    beforeEach(() => {
      objTrabajos = [
        {
          'id': '4057',
          'fechaInicio': '2023-12-01',
          'horaInicio': '10:00',
          'fechaFin': '2023-12-01',
          'horaFin': '12:00',
          'tipoTrabajo': 'Flete',
          'camion': '001',
          'conductor': '0001',
          'estadoTrabajo': 'Planificado',
          'estadoPago': 'PENDIENTE',
          'descripcion': 'Sin desc',
          'direccionIni': '18 de Julio 1234',
          'direccionFin': 'Bv. Artigas 223 esq. Magallanes',
          'nombre': 'Supermercado Tata',
        },
        {
          'id': '4060',
          'fechaInicio': '2023-12-02',
          'horaInicio': '10:00',
          'fechaFin': '2023-12-02',
          'horaFin': '22:00',
          'tipoTrabajo': 'Reparto',
          'camion': '001',
          'conductor': '0003',
          'estadoTrabajo': 'Planificado',
          'estadoPago': 'PENDIENTE',
          'descripcion': 'Llamar al completar todo',
          'direcciones': [
            {
              'name': 'Cliente 1',
              'dir': 'Ellauri 567',
            },
            {
              'name': 'Cliente 2',
              'dir': 'Mercedes 621',
            },
            {
              'name': 'Cliente 3',
              'dir': 'Canelones 998',
            },
          ],
        },
        {
          'id': '4058',
          'fechaInicio': '2023-12-02',
          'horaInicio': '11:00',
          'fechaFin': '2023-12-02',
          'horaFin': '15:00',
          'tipoTrabajo': 'Flete',
          'camion': '004',
          'conductor': '0002',
          'estadoTrabajo': 'Planificado',
          'estadoPago': 'PENDIENTE',
          'descripcion': 'Llamar antes de llegar',
          'direccionIni': '8 de Octubre 3112',
          'direccionFin': 'Ellauri 542',
          'nombre': 'Supermercado Disco',
        },
        {
          'id': '4059',
          'fechaInicio': '2023-12-03',
          'horaInicio': '12:00',
          'fechaFin': '2023-12-03',
          'horaFin': '14:00',
          'tipoTrabajo': 'Flete',
          'camion': '003',
          'conductor': '0003',
          'estadoTrabajo': 'Planificado',
          'estadoPago': 'PENDIENTE',
          'descripcion': 'Sin desc',
          'direccionIni': 'Zabala 234 esq. Rincón',
          'direccionFin': 'Mercedes esq. Lima',
          'nombre': 'Supermercado Tata',
        },
        {
          'id': '4061',
          'fechaInicio': '2023-12-08',
          'horaInicio': '18:00',
          'fechaFin': '2023-12-08',
          'horaFin': '23:00',
          'tipoTrabajo': 'Reparto',
          'camion': '002',
          'conductor': '0002',
          'estadoTrabajo': 'Planificado',
          'estadoPago': 'PENDIENTE',
          'descripcion': 'Llamar al completar todo',
          'direcciones': [
            {
              'name': 'Cliente 1',
              'dir': 'Lima 228',
            },
            {
              'name': 'Cliente 2',
              'dir': 'Miguelete 5543',
            },
            {
              'name': 'Cliente 3',
              'dir': 'Canelones 998',
            },
          ],
        },
        {
          'id': '4062',
          'fechaInicio': '2023-12-09',
          'horaInicio': '19:00',
          'fechaFin': '2023-12-09',
          'horaFin': '00:00',
          'tipoTrabajo': 'Reparto',
          'camion': '001',
          'conductor': '0001',
          'estadoTrabajo': 'En Curso',
          'estadoPago': 'PENDIENTE',
          'descripcion': 'Llamar al completar todo',
          'direcciones': [
            {
              'name': 'Cliente 1',
              'dir': 'Sarandi 906',
            },
            {
              'name': 'Cliente 2',
              'dir': 'Zabala 422',
            },
            {
              'name': 'Cliente 3',
              'dir': 'Sarmiento 5991',
            },
          ],
        },
      ];

      objCamiones = [
        {
          'id': '001',
          'modelo': 'Volkswagen',
          'matricula': 'ABC 1234',
          'fecha': '20-12-2011',
        },
        {
          'id': '002',
          'modelo': 'JAC',
          'matricula': 'NOA 3442',
          'fecha': '30-09-2020',
        },
        {
          'id': '003',
          'modelo': 'JMC',
          'matricula': 'LAP 5622',
          'fecha': '20-04-2016',
        },
        {
          'id': '004',
          'modelo': 'Mercedes Benz',
          'matricula': 'STX 5433',
          'fecha': '01-06-2015',
        },
      ];

      objChoferes = [
        {
          'id': '0001',
          'nombre': 'Juan Martinez',
          'edad': 36,
          'sociedad': 'Medica Uruguaya',
          'telefono': '097561331',
        },
        {
          'id': '0002',
          'nombre': 'Hernesto Rodriguez',
          'edad': 25,
          'sociedad': 'Medica Uruguaya',
          'telefono': '096119751',
        },
        {
          'id': '0003',
          'nombre': 'Gabriel Machado',
          'edad': 55,
          'sociedad': 'Casmu',
          'telefono': '094115332',
        },
        {
          'id': '0004',
          'nombre': 'Carlos Sagrado',
          'edad': 45,
          'sociedad': 'SMI',
          'telefono': '093221562',
        },
      ];
    });

    test('arrTrabajos reiniciado', () => {
      controladorTrabajo.cargarDatosPorDefecto();
      expect(controladorTrabajo.arrTrabajos).toEqual(objTrabajos);
    });

    test('arrCamiones reiniciado', () => {
      controladorTrabajo.cargarDatosPorDefecto();
      expect(controladorTrabajo.arrCamiones).toEqual(objCamiones);
    });

    test('arrChoferes reiniciado', () => {
      controladorTrabajo.cargarDatosPorDefecto();
      expect(controladorTrabajo.arrChoferes).toEqual(objChoferes);
    });
  });
});

describe('Busquedas en estructuras', () => {
  beforeEach(() => {
    jest.resetModules();
  });
  test('buscarTrabajoID', () => {
    controladorTrabajo.cargarDatosPorDefecto();
    const id = '4057';
    const objExpected = {
      id: '4057',
      fechaInicio: '2023-12-01',
      horaInicio: '10:00',
      fechaFin: '2023-12-01',
      horaFin: '12:00',
      tipoTrabajo: 'Flete',
      camion: '001',
      conductor: '0001',
      estadoTrabajo: 'Planificado',
      estadoPago: 'PENDIENTE',
      descripcion: 'Sin desc',
      direccionIni: '18 de Julio 1234',
      direccionFin: 'Bv. Artigas 223 esq. Magallanes',
      nombre: 'Supermercado Tata',
    };
    expect(controladorTrabajo.buscarTrabajoID(id)).toEqual(objExpected);
  });

  test('buscarCamionID', () => {
    controladorTrabajo.cargarDatosPorDefecto();
    const id = '003';
    const objExpected = {
      id: '003',
      modelo: 'JMC',
      matricula: 'LAP 5622',
      fecha: '20-04-2016',
    };
    expect(controladorTrabajo.buscarCamionID(id)).toEqual(objExpected);
  });

  test('buscarChoferID', () => {
    controladorTrabajo.cargarDatosPorDefecto();
    const id = '0004';
    const objExpected = {
      id: '0004',
      nombre: 'Carlos Sagrado',
      edad: 45,
      sociedad: 'SMI',
      telefono: '093221562',
    };
    expect(controladorTrabajo.buscarChoferID(id)).toEqual(objExpected);
  });
});

describe('Validaciones de datos', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('validarFechaInicioMenor', () => {
    test('Cuando fecha de inicio es menor a fecha final', () => {
      const fechaInicio = '2023-11-20';
      const horaInicio = '19:00';
      const fechaFin = '2023-11-21';
      const horaFin = '14:00';
      expect(() =>
        controladorTrabajo.validarFechaInicioMenor(
            fechaInicio,
            horaInicio,
            fechaFin,
            horaFin,
        ),
      ).not.toThrow();
    });

    test('Debe retornar error cuando la fecha de inicio el mayor que la fecha de finalizacion', () => {
      const fechaInicio = '2023-01-02';
      const horaInicio = '12:00';
      const fechaFin = '2023-01-01';
      const horaFin = '12:00';

      expect(() =>
        controladorTrabajo.validarFechaInicioMenor(
            fechaInicio,
            horaInicio,
            fechaFin,
            horaFin,
        ),
      ).toThrow('La fecha de inicio no puede ser mayor a la fecha de fin');
    });
  });

  describe('validarInclusionFechas', () => {
    test('Debe retorar false cuando no hay solapamiento', () => {
      const result = controladorTrabajo.validarInclusionFechas(
          new Date('2023-01-01T10:00:00.000-03:00'),
          new Date('2023-01-15T10:30:00.000-03:00'),
          new Date('2023-01-16T11:00:00.000-03:00'),
          new Date('2023-01-20T11:30:00.000-03:00'),
      );
      expect(result).toBe(false);
    });

    test('Debe retornar true cuando hay solapamiento en el inicio', () => {
      const result = controladorTrabajo.validarInclusionFechas(
          new Date('2023-01-01T10:00:00.000-03:00'),
          new Date('2023-01-05T10:30:00.000-03:00'),
          new Date('2023-01-05T10:15:00.000-03:00'),
          new Date('2023-01-15T11:30:00.000-03:00'),
      );
      expect(result).toBe(true);
    });

    test('Debe retornar true cuando hay solapamiento en el final', () => {
      const result = controladorTrabajo.validarInclusionFechas(
          new Date('2023-01-14T10:00:00.000-03:00'),
          new Date('2023-01-16T10:30:00.000-03:00'),
          new Date('2023-01-05T10:15:00.000-03:00'),
          new Date('2023-01-15T11:30:00.000-03:00'),
      );
      expect(result).toBe(true);
    });

    test('Debe retornar true cuando un intervalo esta completamente dentro de otro', () => {
      const result = controladorTrabajo.validarInclusionFechas(
          new Date('2023-01-09T10:00:00.000-03:00'),
          new Date('2023-01-12T10:30:00.000-03:00'),
          new Date('2023-01-05T10:15:00.000-03:00'),
          new Date('2023-01-15T11:30:00.000-03:00'),
      );
      expect(result).toBe(true);
    });
  });
});

describe('Creacion de trabajos', () => {
  describe('Test agregar Flete', () => {
    beforeEach(() => {
      // jest.resetModules();
      controladorTrabajo.cargarDatosPorDefecto();

      // // Trabajo a insertar en cada test
      // id = controladorTrabajo.getContadorNext();
      // // Datos para flete
      // fechaInicio = '2023-11-08';
      // horaInicio = '1100';
      // fechaFin = '2023-11-08';
      // horaFin = '1200';
      // camion = '001';
      // cond = '0002';
      // dirIni = 'Calle Falsa 123';
      // dirFin = 'Lima 4322';
      // nom = 'Martin';
      // desc = 'Sin desc';
    });

    test('Cuando se agrega un flete válido', () => {
      // const ctrl = require('../models/controladorTrabajo');
      const id = controladorTrabajo.getContadorNext();
      // Datos para flete
      const fechaInicio = '2023-11-08';
      const horaInicio = '1100';
      const fechaFin = '2023-11-08';
      const horaFin = '1200';
      const camion = '001';
      const cond = '0002';
      const dirIni = 'Calle Falsa 123';
      const dirFin = 'Lima 4322';
      const nom = 'Martin';
      const desc = 'Sin desc';
      // Accion
      controladorTrabajo.agregarFlete(
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

      // Assertion
      const index = arrTrabajos.findIndex((item) => item.id === id);
      expect(controladorTrabajo.arrTrabajos[index]).toEqual(
          new Flete(
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
          ),
      );
    });

    test('Debe retornar error si ya existe un trabajo con el ID', () => {
      // const ctrl = require('../models/controladorTrabajo');
      const id = '4057';
      // Datos para flete
      const fechaInicio = '2023-11-08';
      const horaInicio = '11:00';
      const fechaFin = '2023-11-08';
      const horaFin = '12:00';
      const camion = '001';
      const cond = '0002';
      const dirIni = 'Calle Falsa 123';
      const dirFin = 'Lima 4322';
      const nom = 'Martin';
      const desc = 'Sin desc';

      expect(() => controladorTrabajo.agregarFlete(
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
      )).toThrow('El trabajo con id: 4057 ya existe');
    });

    test('Debe retornar error si la fechaInicio es mayor a fechaFin', () => {
      const id = '5000';
      const fechaInicio = '2023-11-08';
      const horaInicio = '11:00';
      const horaFin = '12:00';
      const camion = '001';
      const cond = '0002';
      const dirIni = 'Calle Falsa 123';
      const dirFin = 'Lima 4322';
      const nom = 'Martin';
      const desc = 'Sin desc';
      // Dato variante
      const fechaFin = '2023-11-08';

      expect(() => controladorTrabajo.agregarFlete(
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
      ).toThrow('La fecha de inicio no puede ser mayor a la fecha de fin'));
    });

    test('Debe retornar error si el camión esta ocupado para ese horario', () => {
      const id = '5000';
      const cond = '0002';
      const dirIni = 'Calle Falsa 123';
      const dirFin = 'Lima 4322';
      const nom = 'Martin';
      const desc = 'Sin desc';
      // Datos variantes
      const fechaInicio = '2023-12-02';
      const horaInicio = '11:00';
      const fechaFin = '2023-12-02';
      const horaFin = '15:00';
      const camion = '001';

      expect(() => controladorTrabajo.agregarFlete(
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
      )).toThrow('El camión: Volkswagen ABC 1234 ya esta asignado a un trabajo en ese horario');
    });

    test('Debe retornar error si el conductor esta ocupado para ese horario', () => {
      const id = '5000';
      const camion = '002';
      const dirIni = 'Calle Falsa 123';
      const dirFin = 'Lima 4322';
      const nom = 'Martin';
      const desc = 'Sin desc';
      // Datos variantes
      const fechaInicio = '2023-12-02';
      const horaInicio = '11:00';
      const fechaFin = '2023-12-02';
      const horaFin = '15:00';
      const cond = '0002';

      expect(() => controladorTrabajo.agregarFlete(
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
      )).toThrow('El conductor: Hernesto Rodriguez ya esta asignado a un trabajo en ese horario');
    });
  }); // Fin describe('Test agregar Flete')

  describe('Test agregar Reparto', () => {
    const dummyDirs = [
      {name: 'Cliente 1', dir: 'Sarandi 906'},
      {name: 'Cliente 2', dir: 'Zabala 422'},
      {name: 'Cliente 3', dir: 'Sarmiento 5991'},
    ];
    beforeEach(() => {
      controladorTrabajo.cargarDatosPorDefecto();
    });

    test('Cuando se agrega un Reparto válido', () => {
      // const ctrl = require('../models/controladorTrabajo');
      const id = controladorTrabajo.getContadorNext();
      const fechaInicio = '2023-11-08';
      const horaInicio = '11:00';
      const fechaFin = '2023-11-08';
      const horaFin = '12:00';
      const camion = '001';
      const cond = '0002';
      const dirs = dummyDirs;
      const desc = 'Sin desc';
      // Accion
      controladorTrabajo.agregarReparto(
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

      // Assertion
      const index = arrTrabajos.findIndex((item) => item.id === id);
      expect(controladorTrabajo.arrTrabajos[index]).toEqual(
          new Reparto(
              id,
              fechaInicio,
              horaInicio,
              fechaFin,
              horaFin,
              camion,
              cond,
              dirs,
              desc,
          ),
      );
    });

    test('Debe retornar error si ya existe un trabajo con el ID', () => {
      // const ctrl = require('../models/controladorTrabajo');
      const id = '4060';
      // Datos para reparto
      const fechaInicio = '2023-11-08';
      const horaInicio = '11:00';
      const fechaFin = '2023-11-08';
      const horaFin = '12:00';
      const camion = '001';
      const cond = '0002';
      const dirs = dummyDirs;
      const desc = 'Sin desc';

      expect(() => controladorTrabajo.agregarReparto(
          id,
          fechaInicio,
          horaInicio,
          fechaFin,
          horaFin,
          camion,
          cond,
          dirs,
          desc,
      )).toThrow('El trabajo con id: 4060 ya existe');
    });

    test('Debe retornar error si la fechaInicio es mayor a fechaFin', () => {
      const id = controladorTrabajo.getContadorNext();
      const fechaFin = '2023-11-08';
      const horaFin = '10:00';
      const camion = '001';
      const cond = '0002';
      const dirs = dummyDirs;
      const desc = 'Sin desc';

      const fechaInicio = '2023-12-01';
      const horaInicio = '11:00';

      expect(() => controladorTrabajo.agregarReparto(
          id,
          fechaInicio,
          horaInicio,
          fechaFin,
          horaFin,
          camion,
          cond,
          dirs,
          desc,
      )).toThrow('La fecha de inicio no puede ser mayor a la fecha de fin');
    });

    test('Debe retornar error si el camión esta ocupado para ese horario', () => {
      const id = controladorTrabajo.getContadorNext();
      const cond = '0002';
      const dirs = dummyDirs;
      const desc = 'Sin desc';

      const fechaInicio = '2023-12-02';
      const horaInicio = '13:00';
      const fechaFin = '2023-12-02';
      const horaFin = '22:00';
      const camion = '004';

      expect(() => controladorTrabajo.agregarReparto(
          id,
          fechaInicio,
          horaInicio,
          fechaFin,
          horaFin,
          camion,
          cond,
          dirs,
          desc,
      )).toThrow('El camión: Mercedes Benz STX 5433 ya esta asignado a un trabajo en ese horario');
    });

    test('Debe retornar error si el conductor esta ocupado para ese horario', () => {
      const id = controladorTrabajo.getContadorNext();
      const camion = '003';
      const dirs = dummyDirs;
      const desc = 'Sin desc';

      const fechaInicio = '2023-12-09';
      const horaInicio = '19:00';
      const fechaFin = '2023-12-09';
      const horaFin = '23:00';
      const cond = '0001';

      expect(() => controladorTrabajo.agregarReparto(
          id,
          fechaInicio,
          horaInicio,
          fechaFin,
          horaFin,
          camion,
          cond,
          dirs,
          desc,
      )).toThrow('El conductor: Juan Martinez ya esta asignado a un trabajo en ese horario');
    });
  }); // Fin describe('Test agregar Reparto')

  describe('Agregar un Trabajo', () => {
    beforeEach(() => {
      controladorTrabajo.cargarDatosPorDefecto();
    });

    test('Se agrega un trabajo válido de tipo Flete', () => {
      // controladorTrabajo.cargarDatosPorDefecto();
      const obj = {
        tipo: 'flete',
        fechaIni: '2023-11-22',
        horaIni: '10:00',
        fechaFin: '2023-11-26',
        horaFin: '12:00',
        camion: '001',
        chofer: '0001',
        desc: 'Nada que comentar',
        nomCliente: 'Juanito',
        direccionIni: 'Mercedes 123',
        direccionFin: 'Ellauri 321',
      };

      const objExpected = {
        id: '4063',
        fechaInicio: '2023-11-22',
        horaInicio: '10:00',
        fechaFin: '2023-11-26',
        horaFin: '12:00',
        tipoTrabajo: 'Flete',
        camion: '001',
        conductor: '0001',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Nada que comentar',
        direccionIni: 'Mercedes 123',
        direccionFin: 'Ellauri 321',
        nombre: 'Juanito',
      };

      controladorTrabajo.agregarTrabajo(obj);

      expect(controladorTrabajo.buscarTrabajoID('4063')).toEqual(objExpected);
    });

    test('Se agrega un trabajo válido de tipo Reparto', () => {
      // controladorTrabajo.cargarDatosPorDefecto();
      const obj = {
        tipo: 'reparto',
        fechaIni: '2023-11-19',
        horaIni: '10:00',
        fechaFin: '2023-11-20',
        horaFin: '15:00',
        camion: '001',
        chofer: '0001',
        desc: 'Nada que comentar',
        clientes: [
          {name: 'Cliente de prueba 1', dir: 'Calle Falsa 123'},
          {name: 'Cliente de prueba 2', dir: 'Calle Verdadera 321'},
        ],
      };

      const objExpected = {
        id: '4063',
        fechaInicio: '2023-11-19',
        horaInicio: '10:00',
        fechaFin: '2023-11-20',
        horaFin: '15:00',
        tipoTrabajo: 'Reparto',
        camion: '001',
        conductor: '0001',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Nada que comentar',
        direcciones: [
          {name: 'Cliente de prueba 1', dir: 'Calle Falsa 123'},
          {name: 'Cliente de prueba 2', dir: 'Calle Verdadera 321'},
        ],
      };

      // Accion
      controladorTrabajo.agregarTrabajo(obj);

      expect(controladorTrabajo.buscarTrabajoID('4063')).toEqual(objExpected);
    });
  });
}); // describe('Creacion de trabajos')

describe('Ordenado y filtrado de estructuras', () => {
  test('ordenarArregloTrabajo', () => {
    controladorTrabajo.cargarDatosPorDefecto();
    const objAgregar = {
      tipo: 'reparto',
      fechaIni: '2023-12-03',
      horaIni: '10:00',
      fechaFin: '2023-12-05',
      horaFin: '12:00',
      camion: '001',
      chofer: '0001',
      desc: 'Tocar timbre',
      clientes: [
        {name: 'Nombre de cliente 1', dir: 'Y la direccion de cliente 1'},
      ],
    };

    const arrEsperado = [
      {
        'id': '4057',
        'fechaInicio': '2023-12-01',
        'horaInicio': '10:00',
        'fechaFin': '2023-12-01',
        'horaFin': '12:00',
        'tipoTrabajo': 'Flete',
        'camion': '001',
        'conductor': '0001',
        'estadoTrabajo': 'Planificado',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Sin desc',
        'direccionIni': '18 de Julio 1234',
        'direccionFin': 'Bv. Artigas 223 esq. Magallanes',
        'nombre': 'Supermercado Tata',
      },
      {
        'id': '4060',
        'fechaInicio': '2023-12-02',
        'horaInicio': '10:00',
        'fechaFin': '2023-12-02',
        'horaFin': '22:00',
        'tipoTrabajo': 'Reparto',
        'camion': '001',
        'conductor': '0003',
        'estadoTrabajo': 'Planificado',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Llamar al completar todo',
        'direcciones': [
          {
            'name': 'Cliente 1',
            'dir': 'Ellauri 567',
          },
          {
            'name': 'Cliente 2',
            'dir': 'Mercedes 621',
          },
          {
            'name': 'Cliente 3',
            'dir': 'Canelones 998',
          },
        ],
      },
      {
        'id': '4058',
        'fechaInicio': '2023-12-02',
        'horaInicio': '11:00',
        'fechaFin': '2023-12-02',
        'horaFin': '15:00',
        'tipoTrabajo': 'Flete',
        'camion': '004',
        'conductor': '0002',
        'estadoTrabajo': 'Planificado',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Llamar antes de llegar',
        'direccionIni': '8 de Octubre 3112',
        'direccionFin': 'Ellauri 542',
        'nombre': 'Supermercado Disco',
      },
      {
        'id': '4063',
        'fechaInicio': '2023-12-03',
        'horaInicio': '10:00',
        'fechaFin': '2023-12-05',
        'horaFin': '12:00',
        'tipoTrabajo': 'Reparto',
        'camion': '001',
        'conductor': '0001',
        'estadoTrabajo': 'Planificado',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Tocar timbre',
        'direcciones': [
          {
            'name': 'Nombre de cliente 1',
            'dir': 'Y la direccion de cliente 1',
          },
        ],
      },
      {
        'id': '4059',
        'fechaInicio': '2023-12-03',
        'horaInicio': '12:00',
        'fechaFin': '2023-12-03',
        'horaFin': '14:00',
        'tipoTrabajo': 'Flete',
        'camion': '003',
        'conductor': '0003',
        'estadoTrabajo': 'Planificado',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Sin desc',
        'direccionIni': 'Zabala 234 esq. Rincón',
        'direccionFin': 'Mercedes esq. Lima',
        'nombre': 'Supermercado Tata',
      },
      {
        'id': '4061',
        'fechaInicio': '2023-12-08',
        'horaInicio': '18:00',
        'fechaFin': '2023-12-08',
        'horaFin': '23:00',
        'tipoTrabajo': 'Reparto',
        'camion': '002',
        'conductor': '0002',
        'estadoTrabajo': 'Planificado',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Llamar al completar todo',
        'direcciones': [
          {
            'name': 'Cliente 1',
            'dir': 'Lima 228',
          },
          {
            'name': 'Cliente 2',
            'dir': 'Miguelete 5543',
          },
          {
            'name': 'Cliente 3',
            'dir': 'Canelones 998',
          },
        ],
      },
      {
        'id': '4062',
        'fechaInicio': '2023-12-09',
        'horaInicio': '19:00',
        'fechaFin': '2023-12-09',
        'horaFin': '00:00',
        'tipoTrabajo': 'Reparto',
        'camion': '001',
        'conductor': '0001',
        'estadoTrabajo': 'En Curso',
        'estadoPago': 'PENDIENTE',
        'descripcion': 'Llamar al completar todo',
        'direcciones': [
          {
            'name': 'Cliente 1',
            'dir': 'Sarandi 906',
          },
          {
            'name': 'Cliente 2',
            'dir': 'Zabala 422',
          },
          {
            'name': 'Cliente 3',
            'dir': 'Sarmiento 5991',
          },
        ],
      },
    ];

    controladorTrabajo.agregarTrabajo(objAgregar);
    controladorTrabajo.ordenarArregloTrabajo();
    expect(controladorTrabajo.arrTrabajos).toEqual(arrEsperado);
  });

  test('filtrarTrabajosPorEstado', () => {
    controladorTrabajo.buscarTrabajoID('4062').setEstadoTrabajo('En Curso');
    controladorTrabajo.buscarTrabajoID('4059').setEstadoTrabajo('En Curso');

    const objEsperado = [
      {
        id: '4059',
        fechaInicio: '2023-12-03',
        horaInicio: '12:00',
        fechaFin: '2023-12-03',
        horaFin: '14:00',
        tipoTrabajo: 'Flete',
        camion: '003',
        conductor: '0003',
        estadoTrabajo: 'En Curso',
        estadoPago: 'PENDIENTE',
        descripcion: 'Sin desc',
        direccionIni: 'Zabala 234 esq. Rincón',
        direccionFin: 'Mercedes esq. Lima',
        nombre: 'Supermercado Tata',
      },
      {
        id: '4062',
        fechaInicio: '2023-12-09',
        horaInicio: '19:00',
        fechaFin: '2023-12-09',
        horaFin: '00:00',
        tipoTrabajo: 'Reparto',
        camion: '001',
        conductor: '0001',
        estadoTrabajo: 'En Curso',
        estadoPago: 'PENDIENTE',
        descripcion: 'Llamar al completar todo',
        direcciones: [
          {name: 'Cliente 1', dir: 'Sarandi 906'},
          {name: 'Cliente 2', dir: 'Zabala 422'},
          {name: 'Cliente 3', dir: 'Sarmiento 5991'},
        ],
      },
    ];

    expect(controladorTrabajo.filtrarTrabajosPorEstado('En Curso')).toEqual(objEsperado);
  });
});

describe('Procesamiento de lista de trabajo para carga de archivos .ejs', () => {
  test('getListaTrabajosCompleta', () => {
    controladorTrabajo.cargarDatosPorDefecto();
    const arrayEsperado = [
      {
        id: '4057',
        fechaInicio: '2023-12-01',
        horaInicio: '10:00',
        fechaFin: '2023-12-01',
        horaFin: '12:00',
        tipoTrabajo: 'Flete',
        camion: 'Volkswagen ABC 1234',
        conductor: 'Juan Martinez',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Sin desc',
        direccionIni: '18 de Julio 1234',
        direccionFin: 'Bv. Artigas 223 esq. Magallanes',
        nombre: 'Supermercado Tata',
        direccion: '18 de Julio 1234, Bv. Artigas 223 esq. Magallanes',
      },
      {
        id: '4060',
        fechaInicio: '2023-12-02',
        horaInicio: '10:00',
        fechaFin: '2023-12-02',
        horaFin: '22:00',
        tipoTrabajo: 'Reparto',
        camion: 'Volkswagen ABC 1234',
        conductor: 'Gabriel Machado',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Llamar al completar todo',
        direcciones: [
          'Cliente 1: Ellauri 567',
          'Cliente 2: Mercedes 621',
          'Cliente 3: Canelones 998',
        ],
        direccion: 'Ellauri 567, Mercedes 621, Canelones 998',
      },
      {
        id: '4058',
        fechaInicio: '2023-12-02',
        horaInicio: '11:00',
        fechaFin: '2023-12-02',
        horaFin: '15:00',
        tipoTrabajo: 'Flete',
        camion: 'Mercedes Benz STX 5433',
        conductor: 'Hernesto Rodriguez',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Llamar antes de llegar',
        direccionIni: '8 de Octubre 3112',
        direccionFin: 'Ellauri 542',
        nombre: 'Supermercado Disco',
        direccion: '8 de Octubre 3112, Ellauri 542',
      },
      {
        id: '4059',
        fechaInicio: '2023-12-03',
        horaInicio: '12:00',
        fechaFin: '2023-12-03',
        horaFin: '14:00',
        tipoTrabajo: 'Flete',
        camion: 'JMC LAP 5622',
        conductor: 'Gabriel Machado',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Sin desc',
        direccionIni: 'Zabala 234 esq. Rincón',
        direccionFin: 'Mercedes esq. Lima',
        nombre: 'Supermercado Tata',
        direccion: 'Zabala 234 esq. Rincón, Mercedes esq. Lima',
      },
      {
        id: '4061',
        fechaInicio: '2023-12-08',
        horaInicio: '18:00',
        fechaFin: '2023-12-08',
        horaFin: '23:00',
        tipoTrabajo: 'Reparto',
        camion: 'JAC NOA 3442',
        conductor: 'Hernesto Rodriguez',
        estadoTrabajo: 'Planificado',
        estadoPago: 'PENDIENTE',
        descripcion: 'Llamar al completar todo',
        direcciones: [
          'Cliente 1: Lima 228',
          'Cliente 2: Miguelete 5543',
          'Cliente 3: Canelones 998',
        ],
        direccion: 'Lima 228, Miguelete 5543, Canelones 998',
      },
      {
        id: '4062',
        fechaInicio: '2023-12-09',
        horaInicio: '19:00',
        fechaFin: '2023-12-09',
        horaFin: '00:00',
        tipoTrabajo: 'Reparto',
        camion: 'Volkswagen ABC 1234',
        conductor: 'Juan Martinez',
        estadoTrabajo: 'En Curso',
        estadoPago: 'PENDIENTE',
        descripcion: 'Llamar al completar todo',
        direcciones: [
          'Cliente 1: Sarandi 906',
          'Cliente 2: Zabala 422',
          'Cliente 3: Sarmiento 5991',
        ],
        direccion: 'Sarandi 906, Zabala 422, Sarmiento 5991',
      },
    ];
    const arrTrabajos = controladorTrabajo.arrTrabajos;
    expect(controladorTrabajo.getListaTrabajosCompleta(arrTrabajos)).toEqual(arrayEsperado);
  });
});

describe('Actualizacion de trabajo', () => {
  describe('Cambio del estado de trabajo', () => {
    beforeEach(() => {
      controladorTrabajo.cargarDatosPorDefecto();
    });

    test('Cambio de estado a En Curso', () => {
      controladorTrabajo.actualizarTrabajo('4058', 'estadoTrabajo', 'En Curso');
      expect(controladorTrabajo.buscarTrabajoID('4058').estadoTrabajo).toBe('En Curso');
    });

    test('Cambio de camión válido ', () => {
      controladorTrabajo.actualizarTrabajo('4058', 'camion', '002');
      expect(controladorTrabajo.buscarTrabajoID('4058').camion).toBe('002');
    });

    test('Se intenta cambiar a un camion que esta ocupado en ese horario', () => {
      // Observar los trabajos flete2 y reparto1
      expect(() => controladorTrabajo.actualizarTrabajo('4060', 'camion', '004')).
          toThrow('El camión: Mercedes Benz STX 5433 ya esta asignado a un trabajo en ese horario');
    });

    test('Se intenta cambiar a un camion de un trabajo con estado Realizado', () => {
      controladorTrabajo.buscarTrabajoID('4061').setEstadoTrabajo('Realizado');
      expect(() => controladorTrabajo.actualizarTrabajo('4061', 'camion', '004')).
          toThrow('No se puede editar un camion de un trabajo con estado Realizado');
    });

    test('Se intenta cambiar a un camion de un trabajo con estado Cancelado', () => {
      controladorTrabajo.buscarTrabajoID('4061').setEstadoTrabajo('Cancelado');
      expect(() => controladorTrabajo.actualizarTrabajo('4061', 'camion', '004')).
          toThrow('No se puede editar un camion de un trabajo con estado Cancelado');
    });
  });
});
