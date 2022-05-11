import { createDoctor } from "../repositories/doctorRepository.js";

export const registerDoctor = async (req, res) => {
    const doctorBody = req.body;
    const doctor = await createDoctor(doctorBody);
    res.json(doctor);
};
