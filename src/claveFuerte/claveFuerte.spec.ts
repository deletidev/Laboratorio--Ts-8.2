import { validarClave } from './claveFuerte';
import { commonPasswords } from './variables';

describe('validarClave', () => {
  it('Debería devolver un error si los valores de entrada son undefined', () => {
    // Arrange
    const usuario: any = undefined;
    const clave: any = undefined;
    const commonPasswords: any = undefined;

    // Act
    const result = () => validarClave(usuario, clave, commonPasswords);

    // Assert
    expect(result).toThrow('Valores de entrada incorrectos');
  });
  it('Debería devolver un error si los valores de entrada son null', () => {
    // Arrange
    const usuario: any = null;
    const clave: any = null;
    const commonPasswords: any = null;

    // Act
    const result = () => validarClave(usuario, clave, commonPasswords);

    // Assert
    expect(result).toThrow('Valores de entrada incorrectos');
  });
  it('Debería devolver un error si los valores de entrada son null', () => {
    // Arrange
    const usuario = 'Leticia';
    const clave = '';

    // Act
    const result = () => validarClave(usuario, clave, commonPasswords);

    // Assert
    expect(result).toThrow('Valores de entrada incorrectos');
  });
  it.each([
    [
      'Leticia',
      'srcm19r?',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave debe de tener mayúsculas y minúsculas'
      }
    ],
    [
      'Leticia',
      'SMUT19?T',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave debe de tener mayúsculas y minúsculas'
      }
    ],
    [
      'Leticia',
      'sDerer?T',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave debe de tener números'
      }
    ],
    [
      'Leticia',
      'sDerer2T',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave debe de tener caracteres especiales'
      }
    ],
    [
      'Leticia',
      'sDeer2?',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave debe de tener una longitud mínima de 8 caracteres'
      }
    ],
    [
      'Leticia',
      'sLeticia2?',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave no debe tener el nombre del usuario'
      }
    ],
    [
      'Leticia',
      'sLet1234?',
      commonPasswords,
      {
        esValida: false,
        error: 'La clave no debe de contener palabras comunes'
      }
    ]
  ])(
    'Si la entrada es %a,%b,%c debería devolveer %d',
    (usuario, clave, comunes, valorEsperado) => {
      //Act
      const result = validarClave(usuario, clave, comunes);
      //Assert
      expect(result).toEqual(valorEsperado);
    }
  );
});
