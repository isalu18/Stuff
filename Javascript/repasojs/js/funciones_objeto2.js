//Spread operator

let lenguajes = ['Python', 'JavaScript', 'C++', 'Ruby']
let frameworks = ['Django', 'ReactJS', 'AngularJS', 'VueJS']

//let combinacion = lenguajes.concat(frameworks);
let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion);

let [ultimo] = [...lenguajes].reverse(); //El spread operator crea una copia del arreglo
console.log(ultimo);

function suma(a, b, c) {
    console.log(a + b + c);
}

const numeros = [1, 2, 3];
suma(...numeros);