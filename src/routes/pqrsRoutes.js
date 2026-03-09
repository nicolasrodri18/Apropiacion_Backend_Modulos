import express from 'express';
import {
    getAllPQRS,
    getPQRSById,
    createPQRS,
    updatePQRS,
    deletePQRS
} from '../controllers/pqrsController.js';

const pqrsRouter = express.Router();

pqrsRouter.get('/', getAllPQRS);
pqrsRouter.get('/:id', getPQRSById);
pqrsRouter.post('/', createPQRS);
pqrsRouter.put('/:id', updatePQRS);
pqrsRouter.delete('/:id', deletePQRS);

export default pqrsRouter;
