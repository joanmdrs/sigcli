import { findPatientByCpf, getValuesFormPatient } from '../services/patientServices';
import renderer from 'react-test-renderer';
import Patient from "../pages/Patient/Patient"

let container = null;
let id = null;
let name = null;
let cpf = null;
let phone = null;
let email = null;
let username = null;
let password = null;

beforeEach(() => {
  container = document.createElement("div");

  id = document.createElement("input");
  id.setAttribute("id", "form-patient");
  id.setAttribute("data-action", "new");

  name = document.createElement("input");
  name.setAttribute("id", "name");
  name.setAttribute("value","Joan");

  cpf = document.createElement("input");
  cpf.setAttribute("id", "cpf");
  cpf.setAttribute("value","11058118404");

  phone = document.createElement("input");
  phone.setAttribute("id", "phone");
  phone.setAttribute("value","84996269651");

  email = document.createElement("input");
  email.setAttribute("id", "email");
  email.setAttribute("value","joanmdrs@gmail.com");

  username = document.createElement("input");
  username.setAttribute("id", "username");
  username.setAttribute("value", "joanmdrs");

  password = document.createElement("input");
  password.setAttribute("id", "password");
  password.setAttribute("value", "joan123");

  container.appendChild(id);
  container.appendChild(name);
  container.appendChild(cpf);
  container.appendChild(phone);
  container.appendChild(email);
  container.appendChild(username);
  container.appendChild(password);
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});


//Teste getValuesInput
it("Retornando a Descrição do Paciente", () => {

  const got = getValuesFormPatient();
  const expected = {
    id: "new",
    name: "Joan",
    cpf: "11058118404",
    phone: "84996269651",
    email: "joanmdrs@gmail.com",
    username: "joanmdrs",
    password: "joan123",
  };

  expect(expected).toEqual(got);
});

test("resultados devem ser idênticos", async () => {
  const data = await findPatientByCpf('11058118404')
  const patients = JSON.parse(data)
  expect(patients.name).toBe('Allan')
}) 


it('testando a renderização a page Patient', () => {
  const component = renderer.create(Patient);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 
})