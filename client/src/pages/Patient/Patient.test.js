import { filterPatient } from '../../services/patientServices';

test("resultados devem ser idênticos", async () => {
  const data = await filterPatient('11058118404')
  const patients = JSON.parse(data)
  expect(patients.name).toBe('allan')
})