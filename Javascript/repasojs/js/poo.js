//const nombreTarea = "Esta es una tarea";
//const tarea_fake = 'tarea';
export const nombreTarea = "Esta es una tarea"; //Opcion 1
//export default nombreTarea; //Opcion 2

// export default {
//     nombre: nombreTarea,
//     tarea: tarea_fake
// }

export const crearTarea = (tarea, urgencia) => {
    return `La tarea: ${tarea} tiene una urgencia ${urgencia}`
}

export const tareaCompletada = () => console.log('La tarea se ha completado');

export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad
    }

    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        console.log(`y la cantidad es de ${this.cantidad}`);
    }
}

let tarea1 = new Tarea('Aprender javascript', 'Alta');
let tarea2 = new Tarea('Aprender python', 'Media');
let tarea3 = new Tarea('Aprender ruby', 'Baja');
let tarea4 = new Tarea('Aprender c++', 'Baja');

tarea1.mostrar();
tarea2.mostrar();
tarea3.mostrar();
tarea4.mostrar();


let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
compra1.mostrar();