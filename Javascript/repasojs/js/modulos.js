//import { nombreTarea } from './poo.js'; //Opcion 1
import { nombreTarea, crearTarea, tareaCompletada } from './poo.js'; //Opcion 2, puedes cambiarle el nombre a la variable en este import
import Tarea from './poo.js';

console.log(nombreTarea);

const tarea1_fake = crearTarea('Pasear al perro', 'Media');
console.log(tarea1_fake);

tareaCompletada();

const tarea1 = new Tarea('Aprender Javascript', 'Urgente');
console.log(tarea1);
tarea1.mostrar();