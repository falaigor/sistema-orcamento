import { Router } from 'express';
import OrcamentoController from './controllers/OrcamentoController';

const routes = Router();

routes.post('/orcamento', OrcamentoController.create);

export default routes;