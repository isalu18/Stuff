//let su influencia es local, o bien sólo dentro de un scope.
//Por eso es que dentro de un if, let puede re escribirse y por fuera del if tener otro valor.

//En cambio, var es global. Dicen que var ya no se usa mucho

const nombre = 'Isaac';
let trabajo = 'Desarrollador web';

//Forma fea de escribir un console log
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);

//Forma bonita de escribir un console log
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

const appContainer = document.querySelector('#app');

let html = `
            <ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>
`;

appContainer.innerHTML = html;