import { obtener, enviar, actualizar} from "../consultaAPI.js";

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
                    <button type="button" onclick="editar(${value.id})" class="btn btn-primary">Editar</button>
                    <button type="button" onclick="eliminar(${value.id})" class="btn btn-danger">Eliminar</button>
                </td>
            </tr>    
        `).join(" ")}
    `;

    elementoPadre.insertAdjacentHTML("afterbegin", elementosProducto);
}



export { cargarProductos }