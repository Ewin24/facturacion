let btnAdicionar = document.querySelector('#btn-adicionar');
btnAdicionar.addEventListener('click', () => {
    enviar();
});

let cargarUsuarios = async () => {
    let elementoPadre = document.querySelector("#tabla-usuarios");
    let productosData = await obtener();

    let elementosUsuario = `
            ${productosData.map(value => `
                <tr class="table-primary">
                    <td scope="row">${value.id}</td>
                    <td scope="row">${value.cedula}</td>
                    <td>${value.nombre}</td>
                    <td>${value.apellido}</td>
                    <td>
                        <button type="button" onclick="actualizar(${value.id})" class="btn btn-primary">Editar</button>
                        <button type="button" onclick="eliminar(${value.id})" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>    
            `).join(" ")}
        `;
    elementoPadre.innerHTML = '';
    elementoPadre.insertAdjacentHTML("afterbegin", elementosUsuario);
}

let obtener = async () => {
    let peticion = await fetch("https://64f203790e1e60602d249348.mockapi.io/usuarios");
    let res = await peticion.json();
    return res;
}


let enviar = async () => {
    let obj = {
        "cedula": prompt("Ingrese la cedula del nuevo usuario: "),
        "nombre": prompt("Ingrese el nombre del nuevo usuario: "),
        "apellido": prompt("Ingrese el apellido del nuevo usuario: ")
    };
    let config = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)

    }
    let peticion = await fetch("https://64f203790e1e60602d249348.mockapi.io/usuarios", config);
    let res = await peticion.json();
    cargarUsuarios();
    // return res;
}


let actualizar = async (id) => {
    let obj = {
        "cedula": prompt("Ingrese la nueva cedula del usuario: "),
        "nombre": prompt("Ingrese el nuevo nombre del usuario: "),
        "apellido": prompt("Ingrese el nuevo apellido del usuario: ")
    }
    let config = {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj)
    }

    let peticion = await fetch(`https://64f203790e1e60602d249348.mockapi.io/usuarios/` + id, config)
    let res = await peticion.json();
    cargarUsuarios();
    // return res;
}


let eliminar = async (id) => {
    let config = {
        method: "DELETE",
        headers: { 'Content-type': 'application/json' },
    }
    let peticion = await fetch(`https://64f203790e1e60602d249348.mockapi.io/usuarios/` + id, config);
    let res = await peticion.json();
    cargarUsuarios();
    // return res;

}

cargarUsuarios();
