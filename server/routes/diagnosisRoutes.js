import {Router} from 'express';

import {registerDiagnosis} from '../controllers/diagnosisController.js';
export const diagnosisRouter = Router();

diagnosisRouter.use("/", registerDiagnosis);

