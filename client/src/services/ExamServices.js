import api from "./api"

export const addExam = (exam) => {

    const {title, patient_cpf, doctor_crm, description} = exam;



    api.post("/exam/register", {
       title: title,
       patient_cpf: patient_cpf,
       doctor_crm: doctor_crm,
       description: description
    });
  
}
