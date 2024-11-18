/* DESAFIO 1 NODE */
/* PARA INTERACTUAR CON LA APLICACION. SE DEBE IMPORTAR LAS OPERACIONES QUE SE CREE Y LEER LAS CITAS */
/* REQUERIMIENTO 4 */
/* para importar las funciones de archivo operaciones, se trae registrar y leer */
const { registrar, leer } = require('./operaciones');
/* REQUERIMIENTO 5 */
/* se captura argumentos desde process.argv */
/* recibir los datos, desde tercer dato del arreglo */
const operacion = process.argv[2];
const nombre = process.argv[3];
const edad = process.argv[4];
const animal = process.argv[5];
const color = process.argv[6];
const enfermedad = process.argv[7];

/* para ejecutar la operacion */
/* al recibir la operacion se requiere evaluar la operacion a realizar */
if (operacion === "registrar") {
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operacion no se reconoce.");
}
/* REQUERIMIENTO 1 */
/* en consola se ocupará los comandos */
/* node index.js registrar Benito "1 año" perro blanco otitis */
/* node index.js registrar Julieta "6 años" perro amarillo Moquillo */
/* node index.js leer */