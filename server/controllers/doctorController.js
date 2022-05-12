import {
    createDoctor,
    findManyDoctors
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
