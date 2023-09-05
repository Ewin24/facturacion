let obtener = async () => {
    let peticion = await fetch("https://64f203790e1e60602d249348.mockapi.io/producto");
    let res = await peticion.json();
    return res;
}


let enviar = async () => {
    let obj = {
        "nombre": "Arroz",
        "descripcion": "Diana"
    };
    let config = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)

    }
    let peticion = await fetch("https://64f203790e1e60602d249348.mockapi.io/producto", config);
    let res = await peticion.json();
    return res;
}


let actualizar = async () => {
    let id = "7";
    let obj = {
        "nombre": "papas fritas",
        "descripcion": "DeTodito"
    }
    let config = {
        method: "PUT",
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(obj)
    }

    let peticion = await fetch(`https://64f203790e1e60602d249348.mockapi.io/producto/` + id, config)
    let res = await peticion.json();
    return res;
}


export {
    obtener,
    enviar,
    actualizar
}