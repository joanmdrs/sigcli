import { filterPatient } from '../../services/patientServices';

test("resultados devem ser idênticos", async () => {
  const data = await filterPatient('13064465465')
  const patients = JSON.parse(data)
  expect(patients.name).toBe('joan de azevedo medeiros')
})