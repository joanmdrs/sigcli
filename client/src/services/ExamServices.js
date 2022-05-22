import api from "./api"

export const addExam = (exam) => {

    const {title, patient_cpf, patient_name, doctor_crm, doctor_name, description} = exam;

    api.post("/exam/register", {
      title: title,
      patient_cpf: patient_cpf,
      patient_name: patient_name,
      crm_doctor: doctor_crm,
      doctor_name: doctor_name,
      description: description
    });
  
}

export const getExams = async () => {
   const res = await api.get("/exam/getAll");
   const data = res.data;    
   return JSON.stringify(data);
}


