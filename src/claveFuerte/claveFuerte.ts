import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes
} from './helpers/claveFuerte.helper';
import { ValidacionClave } from './modelo';

export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!nombreUsuario || !clave || !commonPasswords) {
    throw new Error('Valores de entrada incorrectos');
  }
  const tiene = [
    tieneMayusculasYMinusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    tieneLongitudMinima(clave),
    tieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords)
  ];
  const encuentro = tiene.find(ti => ti.error);
  return encuentro ? encuentro : { esValida: true };
};
