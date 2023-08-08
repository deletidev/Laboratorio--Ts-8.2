import { ValidacionClave } from '../modelo';

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }

  const mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  const minusculas = mayusculas.toLowerCase();

  const tieneMayusculas = mayusculas
    .split('')
    .some(caracter => clave.includes(caracter));

  const tieneMinusculas = minusculas
    .split('')
    .some(caracter => clave.includes(caracter));

  return tieneMayusculas && tieneMinusculas
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener mayúsculas y minúsculas'
      };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }
  const numeros = '0123456789';
  return numeros.split('').some(caracter => clave.includes(caracter))
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener números'
      };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }
  const caracteresEspeciales = '!@#$%^&*()_+-=[]{}|;:",.<>?¡¿';

  return caracteresEspeciales
    .split('')
    .some(caracter => clave.includes(caracter))
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener caracteres especiales'
      };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }
  return clave.length >= 8
    ? { esValida: true }
    : {
        esValida: false,
        error: 'La clave debe de tener una longitud mínima de 8 caracteres'
      };
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (!clave || !nombreUsuario) {
    throw new Error('La clave o el nombre de usuario son incorrectos');
  }

  return clave.toLowerCase().includes(nombreUsuario.toLowerCase())
    ? {
        esValida: false,
        error: 'La clave no debe tener el nombre del usuario'
      }
    : { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave || !commonPasswords) {
    throw new Error('La clave o las Palabras Comunes son incorrectos');
  }
  return commonPasswords.some(commonWord =>
    clave.toLowerCase().includes(commonWord.toLowerCase())
  )
    ? {
        esValida: false,
        error: 'La clave no debe de contener palabras comunes'
      }
    : { esValida: true };
};
