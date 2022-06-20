import {Router} from 'express';

import {registerDiagnosis, showAllDiagnosisByAppointment} from '../controllers/diagnosisController.js';
export const diagnosisRouter = Router();

diagnosisRouter.post("/", registerDiagnosis);
diagnosisRouter.get("/:appointment_id", showAllDiagnosisByAppointment);

