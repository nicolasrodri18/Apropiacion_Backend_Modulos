import { getAllPQRS, getPQRSById, createPQRS, updatePQRS, removePQRS } from '../models/pqrsMode.js';
export const getPQRS = (req, res) => {
    const data = getAllPQRS();
    res
        .status(200)
            .json({message: `PQRS obtenida con éxito`, data });
};

export const getPQRSById = (req, res) => {
    const { id } = req.params;
    const data = getPQRSById(id);
    res
        .status(200)
            .json({ message: `Obteniendo el PQR con id ${id}`, data });
};

export const createPQRS = (req, res) => {
    const data = createPQRS(req.body);
    res
        .status(201)
            .json({ message: `PQR creado con éxito`, data
            });
};

export const updatePQRS = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const updatedData = updatePQRS(id, data);
    res
        .status(200)
            .json({ message: `PQR actualizado con éxito`, data: updatedData });
};

export const deletePQRS = (req, res) => {
    const { id } = req.params;
    const deletedData = removePQRS(id);
    res
        .status(200)
            .json({ message: 'PQRS eliminada con éxito ', data: deletedData });
};
