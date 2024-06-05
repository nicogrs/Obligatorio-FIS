const parserRequest = require('../models/requestParser.js');

describe('Módulo requestParser', () => {
  describe('Test parseReqCrearTrabajo', () => {
    test('El request es para creacion de trabajo de tipo Flete', () => {
      const reqBody = {
        body: {
          tipo_trabajo: 'flete',
          flete_nomCliente: 'Ernesto Lopez',
          flete_direccionIni: 'Requena 221',
          flete_direccionFin: 'Cuareim 5522',
          flete_fechaIni: '2024-01-10',
          flete_horaIni: '12:30',
          flete_fechaFin: '2024-01-15',
          flete_horaFin: '18:00',
          flete_camion: '004',
          flete_chofer: '0001',
          flete_desc: '',
        },
      };

      const objEsperado = {
        tipo: 'flete',
        fechaIni: '2024-01-10',
        horaIni: '12:30',
        fechaFin: '2024-01-15',
        horaFin: '18:00',
        camion: '004',
        chofer: '0001',
        desc: '',
        nomCliente: 'Ernesto Lopez',
        direccionIni: 'Requena 221',
        direccionFin: 'Cuareim 5522',
      };

      const objObtenido = parserRequest.parseReqCrearTrabajo(reqBody);
      expect(objObtenido).toEqual(objEsperado);
    });

    test('El request es para creacion de trabajo de tipo Reparto', () => {
      const reqBody = {
        body: {
          tipo_trabajo: 'reparto',
          rep_fechaIni: '2024-01-10',
          rep_horaIni: '10:00',
          rep_fechaFin: '2024-01-15',
          rep_horaFin: '10:00',
          rep_camion: '002',
          rep_chofer: '0003',
          rep_desc: 'Nada que comentar',
          clientes: [
            {name: 'Pedro S.A.', dir: 'Calle Falsa 123'},
            {name: 'Pepe Ltda.', dir: 'Calle Verdadera 321'},
          ],
        },
      };

      const objEsperado = {
        tipo: 'reparto',
        fechaIni: '2024-01-10',
        horaIni: '10:00',
        fechaFin: '2024-01-15',
        horaFin: '10:00',
        camion: '002',
        chofer: '0003',
        desc: 'Nada que comentar',
        clientes: [
          {name: 'Pedro S.A.', dir: 'Calle Falsa 123'},
          {name: 'Pepe Ltda.', dir: 'Calle Verdadera 321'},
        ],
      };

      const objObtenido = parserRequest.parseReqCrearTrabajo(reqBody);
      expect(objObtenido).toEqual(objEsperado);
    });
  });
});
