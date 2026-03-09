const getAllPQRS = async () => {
    return [{ id: 1, nombre: "PQR 1", descripcion: "Descripcion del PQR 1"}];
}

const getPQRSById = async (id) => {
    return {id, nombre: `PQR ${id}`, descripcion: `Descripcion del PQR ${id}`};
}

const createPQRS = async (data) => {
    return { mensaje: 'PQRS creada exitosamente en el modelo', data };
}

const updatePQRS = async (id, data) => {
    return { mensaje: `PQRS ${id} actualizada en el modelo`,
        data: { id, ...data }
    };
}

const removePQRS = async (id) => {
    return { mensaje: `PQRS ${id} eliminada en el modelo` };
}

export{
    getAllPQRS,
    getPQRSById,
    createPQRS,
    updatePQRS,
    removePQRS
};
