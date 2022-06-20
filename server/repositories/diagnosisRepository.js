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

export const deleteDiagnosisByID = async (diagnosis_id) => {
    return await prisma.diagnosis.delete({
        where: {
            id: diagnosis_id
        }
    })
}

export const getOneDiagnosisByID = async (diagnosis_id) => {
    return await prisma.diagnosis.findFirst({
        where: {
            id: diagnosis_id
        }
    })
}

export const updateDiagnosisByID = async (diagnosis_id, diagnosisBody) => {
    return await prisma.diagnosis.update({
        where: {
            id: diagnosis_id
        },
        data: diagnosisBody
    })
}
