//Object literal
const persona = {
    nombre: 'Isaac',
    Apellido: 'Sanchez',
    edad: 20
}
console.log(persona);

//Object constructor, se escribe con mayuscula
function Tarea(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
}

//Prototype sirve para atar funciones a cierto object constructor para que esa funcion solo funcione bajo los parametros de dicho objeto
//La idea es que dicha funcion solo funcione para Tarea
Tarea.prototype.mostrarTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.prioridad}`
}

const tarea1 = new Tarea('Matematicas', 1);

//const mostrarTarea1 = mostrarTarea(tarea1.nombre, tarea1.prioridad);
console.log(tarea1);
console.log(tarea1.mostrarTarea());
//console.log(mostrarTarea1);


const aprendiendoJS = {
    version: {
        nueva: 'ES6',
        vieja: 'ES5'
    },
    frameworks: ['React', 'VueJS', 'AngularJS']
}

//Object destructuring
//Esta forma es la vieja y no se recomienda
let version1 = aprendiendoJS.version.nueva;
console.log(version1);

//Destructuring / nueva forma
let { nueva } = aprendiendoJS.version;
console.log(nueva)


//Object literal enhacement
const banda = 'Metallica';
const genero = 'Metal';
const canciones = ['Master of puppets', 'One', 'Seek & Destroy'];

const metallica = { banda, genero, canciones };
console.log(metallica);