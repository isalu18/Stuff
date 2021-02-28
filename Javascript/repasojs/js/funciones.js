let viajando = function(destino) {
    return `Esta viajando a ${destino}`
}

let viaje = viajando('Suecia');
console.log(viaje);

//Si solo hay un parametro puedes quitar los paretensis
//Tambien se puede quitar el return
// Puedes quitar las llaves si solo hay 1 linea
let viajando2 = (destino) => {
    return `Esta viajando a ${destino}`
}

let viaje2 = viajando2('Rusia');
console.log(viaje2);