import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes
} from './claveFuerte.helper';

describe('tieneMayusculasYMinusculas', () => {
  it('Debería devolver un error si la clave es undefined', () => {
    //Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave: any = null;
    // Act
    const result = () => tieneMayusculasYMinusculas(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });

  it('Debería devolver un objeto con esValida: true si la clave es "Ma"', () => {
    //Arrange
    const clave = 'Ma';
    // Act
    const result = tieneMayusculasYMinusculas(clave);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });

  it('clave: ma --> {esValida: false, error: La clave debe de tener mayúsculas y minúsculas}', () => {
    //Arrange
    const clave = 'ma';
    // Act
    const result = tieneMayusculasYMinusculas(clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave debe de tener mayúsculas y minúsculas'
    };
    expect(result).toEqual(expected);
  });

  it('clave: MA --> {esValida: false, error: La clave debe de tener mayúsculas y minúsculas}', () => {
    //Arrange
    const clave = 'MA';
    // Act
    const result = tieneMayusculasYMinusculas(clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave debe de tener mayúsculas y minúsculas'
    };
    expect(result).toEqual(expected);
  });
});

describe('tieneNumeros', () => {
  it('Debería devolver un error si la clave es undefined', () => {
    //Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneNumeros(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave: any = null;
    // Act
    const result = () => tieneNumeros(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un objeto con esValida: true, si la clave es 1', () => {
    //Arrange
    const clave = '1';
    // Act
    const result = tieneNumeros(clave);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });
  it('clave: m,--->{esValida: false, error: La clave debe de tener números}', () => {
    //Arrange
    const clave = 'm';
    // Act
    const result = tieneNumeros(clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave debe de tener números'
    };
    expect(result).toEqual(expected);
  });
});

describe('tieneCaracteresEspeciales', () => {
  it('Debería devolver un error si la clave es undefined', () => {
    //Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneCaracteresEspeciales(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave: any = null;
    // Act
    const result = () => tieneCaracteresEspeciales(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un objeto con esValida: true si la clave es ?', () => {
    //Arrange
    const clave = '?';
    // Act
    const result = tieneCaracteresEspeciales(clave);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });
  it('clave: m,--->{esValida: false, error: La clave debe de tener caracteres especiales}', () => {
    //Arrange
    const clave = 'm';
    // Act
    const result = tieneCaracteresEspeciales(clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave debe de tener caracteres especiales'
    };
    expect(result).toEqual(expected);
  });
});

describe('tieneLongitudMinima', () => {
  it('Debería devolver un error si la clave es undefined', () => {
    //Arrange
    const clave: any = undefined;
    // Act
    const result = () => tieneLongitudMinima(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave: any = null;
    // Act
    const result = () => tieneLongitudMinima(clave);

    // Assert
    expect(result).toThrow('La clave es incorrecta');
  });
  it('Debería devolver un objeto con esValida: true, si la clave es asderret', () => {
    //Arrange
    const clave = 'asderret';
    // Act
    const result = tieneLongitudMinima(clave);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });
  it('Debería devolver un objeto con esValida: true, si la clave es asderretasderret', () => {
    //Arrange
    const clave = 'asderretasderret';
    // Act
    const result = tieneLongitudMinima(clave);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });
  it('clave: asderre --> {esValida: false, error: La clave debe de tener una longitud mínima de 8 caracteres}', () => {
    //Arrange
    const clave = 'asderre';
    // Act
    const result = tieneLongitudMinima(clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave debe de tener una longitud mínima de 8 caracteres'
    };
    expect(result).toEqual(expected);
  });
});

describe('tieneNombreUsuario', () => {
  it('Debería devolver un error si la clave es undefined', () => {
    //Arrange
    const clave: any = undefined;
    const usuario: any = undefined;
    // Act
    const result = () => tieneNombreUsuario(usuario, clave);

    // Assert
    expect(result).toThrow('La clave o el nombre de usuario son incorrectos');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave: any = null;
    const usuario: any = null;
    // Act
    const result = () => tieneNombreUsuario(usuario, clave);

    // Assert
    expect(result).toThrow('La clave o el nombre de usuario son incorrectos');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave = 'asdsd';
    const usuario = 'Leti';
    // Act
    const result = tieneNombreUsuario(usuario, clave);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave = 'leti';
    const usuario = 'Leti';
    // Act
    const result = tieneNombreUsuario(usuario, clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave no debe tener el nombre del usuario'
    };
    expect(result).toEqual(expected);
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave = 'Leti';
    const usuario = 'leti';
    // Act
    const result = tieneNombreUsuario(usuario, clave);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave no debe tener el nombre del usuario'
    };
    expect(result).toEqual(expected);
  });
});

describe('tienePalabrasComunes', () => {
  it('Debería devolver un error si la clave es undefined', () => {
    //Arrange
    const clave: any = undefined;
    const commonPasswords: any = undefined;
    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(result).toThrow('La clave o las Palabras Comunes son incorrectos');
  });
  it('Debería devolver un error si la clave es null', () => {
    //Arrange
    const clave: any = null;
    const commonPasswords: any = null;
    // Act
    const result = () => tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(result).toThrow('La clave o las Palabras Comunes son incorrectos');
  });
  it('clave: dhjadhsg, -->{esValida: true}', () => {
    //Arrange
    const clave = 'dhjadhsg';
    const commonPasswords = [
      'password',
      '123456',
      'letmein',
      'welcome',
      'monkey'
    ];

    // Act
    const result = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    const expected = { esValida: true };
    expect(result).toEqual(expected);
  });
  it('clave: letmein, -->{esValida: false, error: La clave no debe de contener palabras comunes}', () => {
    //Arrange
    const clave = 'Letmein';
    const commonPasswords = [
      'password',
      '123456',
      'letmein',
      'welcome',
      'monkey'
    ];

    // Act
    const result = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    const expected = {
      esValida: false,
      error: 'La clave no debe de contener palabras comunes'
    };
    expect(result).toEqual(expected);
  });
});
