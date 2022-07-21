import renderer from 'react-test-renderer';
import Exam from "./Exam";
import {getValuesInput} from "../../services/ExamServices";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
let title = null;
let patient_cpf = null;
let doctor_crm = null;
let description = null;


beforeEach(() => {
  container = document.createElement("div");

  title = document.createElement("input");
  title.setAttribute("id", "title");
  title.setAttribute("value", "Exame");

  patient_cpf = document.createElement("input");
  patient_cpf.setAttribute("id", "patient-cpf");
  patient_cpf.setAttribute("value","71194505490");

  doctor_crm = document.createElement("input");
  doctor_crm.setAttribute("id", "doctor-crm");
  doctor_crm.setAttribute("value","4659");

  description = document.createElement("input");
  description.setAttribute("id", "description");
  description.setAttribute("value", "Exame de sangue");

  container.appendChild(title);
  container.appendChild(patient_cpf);
  container.appendChild(doctor_crm);
  container.appendChild(description);
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});


//Teste getValuesInput
it("Retornando a Descrição do Exame", () => {

  const got = getValuesInput();
  const expected = {
    title: "Exame",
    description: "Exame de sangue",
    patient_fk: "71194505490",
    doctor_fk: "4659",
  };


  expect(expected).toEqual(got);
});



it('testando a renderização a page Exam', () => {
  const component = renderer.create(Exam);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 

  
})
