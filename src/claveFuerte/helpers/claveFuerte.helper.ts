import { ValidacionClave } from '../modelo';
import {
  mayusculas,
  minusculas,
  numeros,
  caracteresEspeciales
} from '../variables';

const valido = () => ({ esValida: true });

const noValido = (error: string) => ({ esValida: false, error });

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }

  const tieneMayusculas = mayusculas
    .split('')
    .some((caracter: string) => clave.includes(caracter));

  const tieneMinusculas = minusculas
    .split('')
    .some((caracter: string) => clave.includes(caracter));

  return tieneMayusculas && tieneMinusculas
    ? valido()
    : noValido('La clave debe de tener mayúsculas y minúsculas');
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }

  return numeros.split('').some((caracter: string) => clave.includes(caracter))
    ? valido()
    : noValido('La clave debe de tener números');
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }

  return caracteresEspeciales
    .split('')
    .some((caracter: string) => clave.includes(caracter))
    ? valido()
    : noValido('La clave debe de tener caracteres especiales');
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error('La clave es incorrecta');
  }
  return clave.length >= 8
    ? valido()
    : noValido('La clave debe de tener una longitud mínima de 8 caracteres');
};

export const tieneNombreUsuario = (
  clave: string,
  nombreUsuario: string
): ValidacionClave => {
  if (!clave || !nombreUsuario) {
    throw new Error('La clave o el nombre de usuario son incorrectos');
  }

  return clave.toLowerCase().includes(nombreUsuario.toLowerCase())
    ? noValido('La clave no debe tener el nombre del usuario')
    : valido();
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
    ? noValido('La clave no debe de contener palabras comunes')
    : valido();
};
