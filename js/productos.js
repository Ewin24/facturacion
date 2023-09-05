let btnAdicionar = document.querySelector('#btn-adicionar');
btnAdicionar.addEventListener('click', () => {
    enviar();
});

let cargarProductos = async () => {
    let elementoPadre = document.querySelector("#tabla-productos");
    let productosData = await obtener();

    let elementosProducto = `
            ${productosData.map(value => `
                <tr class="table-primary">
                    <td scope="row">${value.id}</td>
                    <td>${value.nombre}</td>
                    <td>${value.descripcion}</td>
                    <td>
                        <button type="button" onclick="actualizar(${value.id})" class="btn btn-primary">Editar</button>
                        <button type="button" onclick="eliminar(${value.id})" class="btn btn-danger">Eliminar</button>
                    </td>
                </tr>    
            `).join(" ")}
        `;
    elementoPadre.innerHTML = '';
    elementoPadre.insertAdjacentHTML("afterbegin", elementosProducto);
}

let obtener = async () => {
    let peticion = await fetch("https://64f203790e1e60602d249348.mockapi.io/producto");
    let res = await peticion.json();
    return res;
}


let enviar = async () => {
    let obj = {
        "nombre": prompt("Ingrese el nombre del nuevo producto: "),
        "descripcion": prompt("Ingrese la descripcion del nuevo producto: ")
    };
    let config = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)

    }
    let peticion = await fetch("https://64f203790e1e60602d249348.mockapi.io/producto", config);
    let res = await peticion.json();
    cargarProductos();
    // return res;
}


let actualizar = async (id) => {
    let obj = {
        "nombre": prompt("Ingrese el nuevo nombre del producto: "),
        "descripcion": prompt("Ingrese la nueva descripcion del producto: ")
    }
    let config = {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj)
    }

    let peticion = await fetch(`https://64f203790e1e60602d249348.mockapi.io/producto/` + id, config)
    let res = await peticion.json();
    cargarProductos();
    // return res;
}

let eliminar = async (id) => {
    let config = {
        method: "DELETE",
        headers: { 'Content-type': 'application/json' },
    }
    let peticion = await fetch(`https://64f203790e1e60602d249348.mockapi.io/producto/` + id, config);
    let res = await peticion.json();
    cargarProductos();
    // return res;

}

cargarProductos();
