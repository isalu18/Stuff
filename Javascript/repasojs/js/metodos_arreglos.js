const personas = [
    { nombre: 'Isaac', edad: 24, aprendiendo: 'Javascript' },
    { nombre: 'Jose', edad: 25, aprendiendo: 'PHP' },
    { nombre: 'Luis', edad: 26, aprendiendo: 'Python' },
    { nombre: 'Roberto', edad: 27, aprendiendo: 'Java' },
    { nombre: 'Francisco', edad: 28, aprendiendo: 'C#' }
]

console.log(personas);

//En estas funciones se esta iterando personas
//Filtra informacion
const mayores = personas.filter(persona => {
    return persona.edad > 26;
});
console.log(mayores);

//Encontrar algo
const luis = personas.find(persona => {
    return persona.nombre === 'Luis';
});
console.log(`Luis esta aprendiendo: ${luis.aprendiendo}`);

//Extrae numeros de un arreglo
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal += persona.edad;
}, 0)

console.log(total / personas.length);