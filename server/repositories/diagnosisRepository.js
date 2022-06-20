import {prisma} from "../service/prisma.js";

export const createDiagnosis = async (diagnosisBody) => {
    return await prisma.diagnosis.create({
        data: diagnosisBody
    })
}