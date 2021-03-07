//Funciones dentro de un objeto
const empleado = {
    nombre: 'Isaac',
    apellido: 'Sanchez',
    edad: 24,
    hobbie: true,
    mostrarInfo() { return `El nombre es ${this.nombre} y su apellido es: ${this.apellido}` }
}


console.log(empleado.mostrarInfo());


//Arreglos, map y Object.keys
//Iterar sobre un arreglo
const carrito = ['Producto 1', 'Producto 2', 'Producto 3']

const appContainer2 = document.querySelector('#app2');

let html2 = '';
//Opcion 1: forEach
carrito.forEach(producto => {
    html2 += `<li>${producto}</li>`;
})

appContainer2.innerHTML = html2;

//Opcion 2: map
//Map se diferencia de forEach al crear una copia del arreglo que se esta iterando
//Map es lo que se debe de usar en la practica por temas de performance

carrito.map(producto => {
    return `El producto es: ${producto}`
})


//Opcion 3: Object keys
//Sirve para comprobar si una llave o existe
const programador = {
    nombre: 'Jose Luis',
    apellido: 'Lopez',
    sueldo: 20000
}

console.log(Object.keys(programador))