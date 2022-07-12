import { prisma } from "../service/prisma.js";

// export const createDoctor = async (doctor) => {
//     return await prisma.doctor.create({
//       data: doctor,
//     });
// };


export const createDoctor = async (doctor, user) => {
  
  return await prisma.$transaction([
    prisma.user.create({
      data: user,
    }),
    prisma.doctor.create({
      data: doctor,
    })
  ]);
};

export const findUniqueByCrmDoctor = async (crm) => {
  return await prisma.doctor.findUnique({
    where: {
      crm,
    },
  });
};

export const findManyDoctors = async () => {
  return await prisma.doctor.findMany();
};

export const updateDoctorWithPrisma = async (doctor) => {
  const { id, name, crm, phone, email } = doctor;
  return await prisma.doctor.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      crm,
      phone, 
      email
    },
  });
};

export const deleteDoctorWithPrisma = async (doctorID, doctorUsername) => {
  return await prisma.$transaction([
    prisma.doctor.delete({
      where: {
        id: Number(doctorID),
      }
    }),
    prisma.user.delete({
      where: {
        username: String(doctorUsername),
      }
    })
  ])
};
