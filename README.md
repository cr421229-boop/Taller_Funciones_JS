# Taller_Funciones_JS
##Taller Funciones JS

1. Walter Castro.

2. Carol Hernandez.

3. Juan Diaz
// --- Reto 1: Identificar tipos primitivos ---
// Declara las siguientes constantes con los valores indicados:
//   texto = "hola"
//   numero = 42
//   booleano = true
//   nulo = null
//   indefinido = undefined
//   simbolo = Symbol("id")
//   grande = 123n
// Retorna un objeto con el typeof de cada una:
//   { texto, numero, booleano, nulo, indefinido, simbolo, grande }
// donde cada valor es el resultado de typeof sobre la variable.
function identificarPrimitivos() {
  // Tu código aquí
}

// --- Reto 2: Diferenciar string y number ---
// Recibe un parámetro "valor".
// Retorna un objeto con:
//   { tipo: typeof valor, esString: true/false, esNumber: true/false }
function diferenciarStringNumber(valor) {
  // Tu código aquí
}

// --- Reto 3: El caso especial de null ---
// Declara una constante "nulo" con valor null.
// Retorna un objeto con:
//   { valor: nulo, tipo: typeof nulo, esNull: true/false }
// Pista: typeof null devuelve "object", pero debes verificar
// si realmente es null usando una comparación estricta (===).
function explorarNull() {
  // Tu código aquí
}

// --- Reto 4: Undefined vs Null ---
// Declara una variable con let llamada "sinAsignar" (sin asignarle valor).
// Declara una constante "vacio" con valor null.
// Retorna un objeto con:
//   { sinAsignar, vacio, tipoSinAsignar: typeof sinAsignar, tipoVacio: typeof vacio, sonIguales: sinAsignar == vacio, sonEstrictamenteIguales: sinAsignar === vacio }
function compararNullUndefined() {
  // Tu código aquí
}

// --- Reto 5: Symbol y BigInt ---
// Crea un Symbol con la descripción "miID".
// Crea un BigInt con el valor 9007199254740991n.
// Retorna un objeto con:
//   { tipoSymbol: typeof del symbol, tipoBigInt: typeof del bigint, descripcionSymbol: symbol.description, valorBigInt: el bigint creado }
function crearSymbolYBigInt() {
  // Tu código aquí
}

// --- Reto 6: Crear un objeto ---
// Crea un objeto "persona" con las propiedades:
//   nombre (string): "Juan"
//   edad (number): 42
//   activo (boolean): true
// Retorna un objeto con:
//   { persona, tipoPersona: typeof persona, propiedades: Object.keys(persona) }
function crearObjeto() {
  // Tu código aquí
}

// --- Reto 7: Trabajar con arrays ---
// Crea un arreglo "mezcla" con los valores: 1, "dos", true, null
// Retorna un objeto con:
//   { arreglo: mezcla, esArreglo: Array.isArray(mezcla), largo: mezcla.length, tipos: [typeof de cada elemento] }
function trabajarConArreglos() {
  // Tu código aquí
}

4. Fernanda Zuluaga

// --- Reto 1: Mensaje de bienvenida con interpolación ---
// Recibe "nombre" (ej: "JavaScript") y "version" (ej: "6").
// Retorna el string: "Bienvenido a [nombre], versión [version]."
// Usa template literals con ${nombre} y ${version}.
function crearMensajeBienvenida(nombre, version) {
  // Tu código aquí
}

// --- Reto 2: Concatenación tradicional (contraste con +) ---
// Recibe dos strings "parte1" y "parte2".
// Retorna un solo string uniendo parte1 + " " + parte2 (concatenación con +).
function concatenarConMas(parte1, parte2) {
  // Tu código aquí
}

// --- Reto 3: Interpolar variables en una frase ---
// Recibe "nombre" (ej: "JavaScript") y "curso" (ej: "Fundamentos").
// Retorna: "Curso de [nombre]: [curso]." usando template literals.
function interpolarVariables(nombre, curso) {
  // Tu código aquí
}

// --- Reto 4: Expresión dentro de template literal ---
// Recibe "precio" (número) y "cantidad" (número).
// Retorna un string con el resultado de precio * cantidad usando
// un template literal: `${precio * cantidad}` (el resultado queda como string).
function calcularTotalComoString(precio, cantidad) {
  // Tu código aquí
}

// --- Reto 5: Tipo de dato del resultado de interpolación ---
// Sin parámetros. Retorna el tipo de dato de la expresión `${1 + 2}`.
// Pista: usa typeof. El resultado de interpolación siempre es string.
function tipoDeResultadoInterpolado() {
  // Tu código aquí
}

// --- Reto 6: Texto multilínea con template literals ---
// Recibe "titulo", "item1" e "item2" (strings).
// Retorna un string con varias líneas con este formato (incluye los saltos de línea):
//   [titulo]
//   - [item1]
//   - [item2]
// Usa template literals con saltos de línea nativos (no uses \n).
function crearNotaMultilinea(titulo, item1, item2) {
  // Tu código aquí
}

5. Maria Camila Ortiz

// --- Reto 1: Contar caracteres con length ---
// Recibe un string "texto". Retorna la cantidad de caracteres (usa la propiedad length).
function contarCaracteres(texto) {
  // Tu código aquí
}

// --- Reto 2: Extraer porción con slice ---
// Recibe "texto", "inicio" y "fin" (índices). Retorna la porción desde inicio hasta fin (sin incluir fin).
// Si fin no se pasa o es undefined, extrae hasta el final del string.
// Usa el método slice.
function extraerConSlice(texto, inicio, fin) {
  // Tu código aquí
}

// --- Reto 3: Extraer desde el final con slice (índice negativo) ---
// Recibe "texto" y "n" (número). Retorna los últimos "n" caracteres del string.
// Usa slice con índice negativo: slice(-n).
function extraerDesdeFinal(texto, n) {
  // Tu código aquí
}

// --- Reto 4: Dividir en array con split ---
// Recibe "texto" y "separador" (string). Retorna un array con las partes del texto
// divididas por el separador. Usa el método split.
function dividirEnPartes(texto, separador) {
  // Tu código aquí
}

// --- Reto 5: Limpiar espacios con trim ---
// Recibe un string "texto" que puede tener espacios al inicio y/o al final.
// Retorna el mismo texto sin espacios al inicio ni al final. Usa trim.
function limpiarEspacios(texto) {
  // Tu código aquí
}

6. Vanessa Castañeda

// --- Reto 1: Coerción implícita con el operador + ---
// Recibe "str" (string, ej: '5') y "num" (número, ej: 3).
// Retorna el resultado de str + num (JavaScript concatena, no suma).
// Ejemplo: '5' + 3 → '53'
function resultadoConcatenacionMas(str, num) {
  // Tu código aquí
}

// --- Reto 2: Coerción implícita con el operador - ---
// Recibe "str" (string que representa un número, ej: '5') y "num" (número, ej: 3).
// Retorna el resultado de str - num (JavaScript convierte el string a número).
// Ejemplo: '5' - 3 → 2
function resultadoRestaConString(str, num) {
  // Tu código aquí
}

// --- Reto 3: Booleano en operación numérica ---
// Recibe "bool" (booleano: true o false).
// Retorna el resultado de bool + 1 (JavaScript convierte el booleano a número).
// Ejemplo: true + 1 → 2, false + 1 → 1
function booleanoMasUno(bool) {
  // Tu código aquí
}

// --- Reto 4: Conversión explícita de string a número ---
// Recibe "str" (string que representa un número, ej: '42').
// Retorna el número usando Number(str). Ejemplo: Number('42') → 42
function convertirStringANumero(str) {
  // Tu código aquí
}

// --- Reto 5: Parsear entero y decimal ---
// Recibe "strEntero" (ej: '42') y "strDecimal" (ej: '3.1415').
// Retorna un objeto { entero, decimal } donde:
//   entero = parseInt(strEntero, 10)
//   decimal = parseFloat(strDecimal)
function parsearEnteroYDecimal(strEntero, strDecimal) {
  // Tu código aquí
}

7. Dayvid Ruiz

// --- Reto 1: Igualdad débil (==) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con ==.
// La coerción puede hacer que 5 == '5' sea true.
function resultadoIgualdadDebil(a, b) {
  // Tu código aquí
}

// --- Reto 2: Desigualdad débil (!=) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con !=.
// Con coerción, 5 != '5' resulta false porque se consideran iguales.
function resultadoDesigualdadDebil(a, b) {
  // Tu código aquí
}

// --- Reto 3: Igualdad estricta (===) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con ===.
// Solo es true si coinciden valor y tipo; no hay conversión implícita.
function resultadoIgualdadEstricta(a, b) {
  // Tu código aquí
}

// --- Reto 4: Desigualdad estricta (!==) ---
// Recibe dos valores "a" y "b". Retorna el resultado de comparar con !==.
// Es true si el valor o el tipo (o ambos) son distintos.
function resultadoDesigualdadEstricta(a, b) {
  // Tu código aquí
}

// --- Reto 5: ¿Son iguales con coerción? ---
// Recibe dos valores "a" y "b". Retorna true si son iguales usando ==
// (permite que número y string "equivalentes" sean iguales).
function sonIgualesConCoercion(a, b) {
  // Tu código aquí
}

8. Kevin Moreno

// --- Reto 1: AND (&&) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a && b (true solo si ambas son true).
function resultadoAnd(a, b) {
  // Tu código aquí
}

// --- Reto 2: OR (||) ---
// Recibe dos booleanos "a" y "b".
// Retorna el resultado de a || b (true si al menos una es true).
function resultadoOr(a, b) {
  // Tu código aquí
}

// --- Reto 3: NOT (!) ---
// Recibe un booleano "val".
// Retorna el resultado de !val (invierte: true → false, false → true).
function resultadoNot(val) {
  // Tu código aquí
}

// --- Reto 4: Validación con AND (ambas condiciones) ---
// Recibe "esAdmin" y "estaActivo" (booleanos).
// Retorna true solo si es administrador Y está activo (puede ver la lista de usuarios).
function puedeVerListaUsuarios(esAdmin, estaActivo) {
  // Tu código aquí
}

// --- Reto 5: Validación con OR (al menos una condición) ---
// Recibe "esUsuarioValido" y "tienePermisoEspecial" (booleanos).
// Retorna true si cumple cualquiera de las dos condiciones (puede acceder).
function puedeAcceder(esUsuarioValido, tienePermisoEspecial) {
  // Tu código aquí
}

9. Omar Rosario

// --- Reto 1: Condición simple (mayor de edad) ---
// Recibe "edad" (número). Retorna true si edad >= 18, false en caso contrario.
// Usa if y else (o solo return de una comparación).
function esMayorDeEdad(edad) {
  // Tu código aquí
}

// --- Reto 2: Mensaje según condición ---
// Recibe "edad" (número). Si edad >= 18 retorna 'eres mayor de edad',
// si no, retorna 'eres menor de edad'. Usa if y else con return.
function mensajeEdad(edad) {
  // Tu código aquí
}

// --- Reto 3: else if para caso exacto ---
// Recibe "edad" (número). Retorna:
// - 'eres mayor de edad' si edad >= 19
// - 'Tienes dieciocho años' si edad === 18
// - 'eres menor de edad' en cualquier otro caso
// Usa if, else if y else. Prioriza la condición más restrictiva primero.
function mensajeEdadDetallado(edad) {
  // Tu código aquí
}

// --- Reto 4: Validar umbral con >= ---
// Recibe "valor" (número) y "minimo" (número).
// Retorna true si valor >= minimo, false en caso contrario.
function cumpleMinimo(valor, minimo) {
  // Tu código aquí
}


10. Diana Sosa

/ --- Reto 1: Día laboral o fin de semana ---
// Recibe "dia" (string en minúsculas: "lunes", "martes", ..., "domingo").
// Retorna "día laboral" para lunes a viernes, "fin de semana" para sábado y domingo,
// "día no válido" para cualquier otro valor.
// Usa switch agrupando los casos que comparten la misma acción (sin repetir código).
function tipoDeDia(dia) {
  // Tu código aquí
}

// --- Reto 2: Mensaje según opción ---
// Recibe "opcion" (string: "a", "b" o "c").
// Retorna "Opción A" si opcion === "a", "Opción B" si "b", "Opción C" si "c".
// Si no coincide con ninguno, retorna "opción no válida" (usa default).
// Usa switch con break en cada case para que no se ejecute el siguiente.
function mensajeOpcion(opcion) {
  // Tu código aquí
}

// --- Reto 3: Categoría por código ---
// Recibe "codigo" (string: "E1", "E2", "H1").
// Retorna "electrónica" para "E1" y "E2" (agrupa ambos case en un mismo resultado).
// Retorna "hogar" para "H1".
// Retorna "desconocido" para cualquier otro (default).
// Practica agrupar varios case que comparten la misma acción.
function categoriaPorCodigo(codigo) {
  // Tu código aquí
}

// --- Reto 4: Días del mes ---
// Recibe "mes" (número del 1 al 12).
// Retorna el número de días del mes: 31 para ene, mar, may, jul, ago, oct, dic;
// 30 para abr, jun, sep, nov; 28 para feb.
// Retorna 0 si el mes no es válido (default).
// Usa switch agrupando los meses que tienen los mismos días.
function diasDelMes(mes) {
  // Tu código aquí
}

11. Josue Castañeda

// --- Reto 1: for con índice i ---
// Recibe "n" (número). Usa un bucle for con let i = 0; i < n; i++.
// Retorna un array con los números de 0 hasta n - 1 (ej: n = 5 → [0, 1, 2, 3, 4]).
function numerosHastaN(n) {
  // Tu código aquí
}

// --- Reto 2: while mientras se cumpla condición ---
// Recibe "limite" (número). Usa un bucle while: un contador empieza en 0
// y se incrementa mientras sea menor que limite. Retorna el valor del contador al terminar.
function contarConWhile(limite) {
  // Tu código aquí
}

// --- Reto 3: do-while (al menos una ejecución) ---
// Recibe "limite" (número). Usa do-while: un contador empieza en 0,
// en el do lo incrementas y en el while repites mientras contador < limite.
// Así se ejecuta al menos una vez antes de validar. Retorna el contador al terminar.
function contarConDoWhile(limite) {
  // Tu código aquí
}

12. Kevin Perea
// --- Reto 1: while con contador e incremento seguro ---
// Recibe "n" (número). Usa un bucle while con un contador que empieza en 0.
// Mientras contador < n, agrega el valor actual del contador a un array y luego
// incrementa el contador (condición de salida). Retorna el array.
// Ejemplo: n = 3 → [0, 1, 2].
function numerosConWhile(n) {
  // Tu código aquí
}

// --- Reto 2: while con condición de salida garantizada ---
// Recibe "limite" (número). Usa while: contador empieza en 0 y se incrementa
// dentro del bucle mientras contador < limite. Retorna el valor del contador al terminar.
// Asegúrate de modificar el contador en cada vuelta para que el ciclo termine.
function contarHastaLimite(limite) {
  // Tu código aquí
}

// --- Reto 3: do...while (ejecuta al menos una vez) ---
// Recibe "limite" (número). Usa do...while: contador empieza en 0, dentro del do
// incrementas el contador y en el while repites mientras contador < limite.
// Así el bloque se ejecuta al menos una vez antes de evaluar la condición.
// Retorna el contador al terminar. Si limite es 0, igual se ejecuta una vez → retorna 1.
function doWhileAlMenosUnaVez(limite) {
  // Tu código aquí
}

13. Angel Garzon

// --- Reto 1: Arrow function con parámetro por defecto y Date.now() ---
// Recibe "contenido" (string) y "titulo" (string, opcional, por defecto 'sin título').
// Retorna un objeto { titulo, contenido, creado } donde creado = Date.now() (número en ms).
// Ejemplo: crearNota('Mi contenido') → { titulo: 'sin título', contenido: 'Mi contenido', creado: 1234567890123 }
function crearNota(contenido, titulo) {
  // Tu código aquí

// --- Reto 2: Función que crea un objeto usuario (parámetros y retorno) ---
// Recibe "nombre" (string) y "edad" (número). Retorna un objeto { nombre, edad }.
// Los parámetros son las variables; los argumentos son los valores al invocar.
// Ejemplo: crearUsuario('Ana', 25) → { nombre: 'Ana', edad: 25 }
function crearUsuario(nombre, edad) {
  // Tu código aquí
}

// --- Reto 3: Arrow function con retorno implícito ---
// Recibe "a" y "b" (números). Retorna a * b (equivalente a una arrow de una línea: (a, b) => a * b).
// Ejemplo: multiplicar(4, 5) → 20
function multiplicar(a, b) {
  // Tu código aquí
}

14. Carolina Ramirez

// --- Reto 1: Acceso a variable global ---
// Declara una variable global llamada "mensajeGlobal" con el valor "Hola mundo"
// y retórnala desde la función.
function accederGlobal() {
  // Tu código aquí
}

// --- Reto 2: Scope de función ---
// Dentro de la función, declara una variable local "secreto" con el valor "1234"
// y retorna un objeto que tenga acceso a la variable local.
function scopeFuncion() {
  // Tu código aquí
}

// --- Reto 3: Scope de bloque ---
// Dentro de un bloque if, declara una variable "mensajeBloque" con let
// y retorna su valor. La variable solo debe existir dentro del bloque.
function scopeBloque() {
  // Tu código aquí
  // Usa un if (true) para crear el bloque
}

15. Yira Gomez

 *  Map y Filter - Manipula arreglos de objetos
 *
 * Los métodos de orden superior como map y filter permiten trabajar con
 * arreglos de forma declarativa, sin mutar el array original.
 *
 * Conceptos clave:
 * - map(): Transforma cada elemento y retorna un nuevo array
 * - filter(): Selecciona elementos que cumplan una condición
 * - Spread operator (...): Copia propiedades de objetos
 * - Arrow functions: Sintaxis concisa para callbacks
 */

/**
 * Ejercicio 1: Extraer títulos con map
 *
 * Dado un array de objetos con notas, usa map para extraer
 * solo el título de cada nota.
 *
 * @param {Array} notas - Array de objetos con propiedad title
 * @returns {Array} - Array con solo los títulos
 *
 * Ejemplo:
 * const notas = [
 *   { id: 1, title: 'Nota uno', content: 'Contenido 1' },
 *   { id: 2, title: 'Nota dos', content: 'Contenido 2' }
 * ];
 * extraerTitulos(notas) // ['Nota uno', 'Nota dos']
 */
function extraerTitulos(notas) {
  // Tu código aquí
}

16. Juan David Cuervo

// --- Reto 6: Añadir propiedades con spread ---
// Crea un nuevo objeto a partir del objeto usuario recibido,
// añadiendo las propiedades "activo: true" y "rol: 'admin'".
// No modifiques el objeto original.
function agregarPropiedadesUsuario(usuario) {
  // Tu código aquí
}

17. Gonzalo Garcia
// --- Reto 1: Transformar objeto a array de strings ---
// Usa destructuración y Object.entries para transformar el objeto recibido
// en un array de strings con formato "clave: valor".
// Ejemplo: { a: 1, b: 2 } → ["a: 1", "b: 2"]
function objetoAStringArray(objeto) {
  // Tu código aquí
  // Tip: Usa Object.entries() y map()
}

