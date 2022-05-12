import {
    createDoctor,
    findManyDoctors,
    updateDoctorWithPrisma
} from "../repositories/doctorRepository.js";

export const registerDoctor = async (req, res) => {
    const doctorBody = req.body;
    const doctor = await createDoctor(doctorBody);
    res.json(doctor);
};
export const getDoctors = async (req, res) => {
    const doctors = await findManyDoctors();
    res.json(doctors);
};

export const updateDoctor = async (req, res) => {
    const doctor = req.body;
    const updatedDoctor = await updateDoctorWithPrisma(doctor);
    res.json(updatedDoctor);
};
