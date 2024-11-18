/* SE CREARÁ 2 FUNCIONES PARA REGISTRAR AL AGREGAR NUEVA CITA DE ATENCION VETERINARIA */
/* Y LEER PARA MOSTRAR POR CONSOLA LAS CITAS REGISTRADAS */
const fs = require("fs");
/* funcion para registrar nueva cita en citas.json */
function registrar(nombre, edad, animal, color, enfermedad) {
  /* para leer */
  const data = fs.readFileSync("./citas.json", "utf-8");
  /* parsear, convertir el contenido JSON en un arreglo */
  const citas = JSON.parse(data);
  /* crear un nuevo objeto con los datos de la cita */
  const nCita = { nombre, edad, animal, color, enfermedad };
  /* agregar nuevo objeto a ese arreglo */
  citas.push(nCita);
  /* REQUERIMIENTO 2 */
  /* para guardar, reescribe, JSON como texto */
  fs.writeFileSync("./citas.json", JSON.stringify(citas, null, 2));
  console.log("Cita fue registrada.");
}
/* REQUERIMIENTO 3 */
/* funcion para leer */
function leer() {
  const data = fs.readFileSync('./citas.json', 'utf-8');
    /* parsear */
    const citas = JSON.parse(data);
    /* para mostrar las citas */
    console.log("Citas con registro:", citas);
  }
/* REQUERIMIENTO 4 */
/* enviando un objeto */
module.exports = { registrar, leer };
