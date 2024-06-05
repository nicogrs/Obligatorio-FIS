const Chofer = require('../models/chofer');

describe('Clase Chofer', () => {
  test('Creacion de nueva instancia de Chofer', () => {
    const nuevoChofer = new Chofer(
        '001',
        'Juan Perez',
        '94',
        'CASMU',
        '091012013',
    );

    expect(nuevoChofer instanceof Chofer).toBe(true);
    expect(nuevoChofer.id).toBe('001');
    expect(nuevoChofer.nombre).toBe('Juan Perez');
    expect(nuevoChofer.edad).toBe('94');
    expect(nuevoChofer.sociedad).toBe('CASMU');
    expect(nuevoChofer.telefono).toBe('091012013');
  });

  test('Método toString', () => {
    const nuevoChofer = new Chofer(
        '002',
        'Juan Lopez',
        '34',
        'Cosem',
        '096123456',
    );

    const strEsperado = 'Juan Lopez';
    const strObtenido = nuevoChofer.toString();
    expect(strObtenido).toBe(strEsperado);
  });
});
