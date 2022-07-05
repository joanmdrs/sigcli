import { filterPatient } from '../../services/patientServices';
import renderer from 'react-test-renderer';
import Patient from "./Patient";

test("resultados devem ser idênticos", async () => {
  const data = await filterPatient('13064465465')
  const patients = JSON.parse(data)
  expect(patients.name).toBe('joan de azevedo medeiros')
}) 


it('testando a renderização a page Patient', () => {
  const component = renderer.create(Patient);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 
})