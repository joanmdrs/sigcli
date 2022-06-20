import {Router} from 'express';

import {registerDiagnosis, showAllDiagnosisByAppointment, deleteDiagnosis, updateDiagnosis} from '../controllers/diagnosisController.js';
export const diagnosisRouter = Router();

diagnosisRouter.post("/", registerDiagnosis);
diagnosisRouter.get("/:appointment_id", showAllDiagnosisByAppointment);
diagnosisRouter.delete("/:diagnosis_id", deleteDiagnosis);
diagnosisRouter.put("/:diagnosis_id", updateDiagnosis);
