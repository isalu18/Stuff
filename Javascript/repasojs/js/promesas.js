//Promesas


const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {

        let descuento = true;

        if (descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se pudo aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then((resultado) => {
    console.log(resultado);
});


//Promesas con ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //Llamado a ajax
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET', api, true); //true = que si sea asincrono

    //On load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.onerror = error => reject(error);

    //Send
    xhr.send();
});

descargarUsuarios(5).then(
    miembros => imprimirHTML(miembros),
    error => console.error(
        new Error('Hubo un error' + error)
    )
);

function imprimirHTML(usuarios) {

    let html = '';
    usuarios.forEach(usuario => {
        html += `
                <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    Pais: ${usuario.nat}
                    Imagen: 
                            <img src="${usuario.picture.medium}">
                </li>
            `;
    });

    const contenedorApp = document.querySelector('#app1');
    contenedorApp.innerHTML = html;
}