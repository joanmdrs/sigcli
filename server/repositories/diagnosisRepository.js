import {prisma} from "../service/prisma.js";

export const createDiagnosis = async (diagnosisBody) => {
    return await prisma.diagnosis.create({
        data: diagnosisBody
    })
}

export const getAllDiagnosisByAppointment = async (appointment_id) => {
    return await prisma.diagnosis.findMany({
        where: {
            appointment_id
        }
    })
}
