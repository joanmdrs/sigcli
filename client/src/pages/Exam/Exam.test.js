import renderer from 'react-test-renderer';
import Exam from "./Exam";
import {getValuesInput} from "../../services/ExamServices";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
let title = null;
let patient_cpf = null;
let patient_name = null;
let doctor_crm = null;
let doctor_name = null;
let description = null;


beforeEach(() => {
  container = document.createElement("div");

  title = document.createElement("input");
  title.setAttribute("id", "title");
  title.setAttribute("value", "Exame");

  patient_cpf = document.createElement("input");
  patient_cpf.setAttribute("id", "patient-cpf");
  patient_cpf.setAttribute("value","71194505490");

  patient_name = document.createElement("input");
  patient_name.setAttribute("id", "patient-name");
  patient_name.setAttribute("value","Allan");


  doctor_crm = document.createElement("input");
  doctor_crm.setAttribute("id", "doctor-crm");
  doctor_crm.setAttribute("value","4659");

  doctor_name = document.createElement("input");
  doctor_name.setAttribute("id", "doctor-name");
  doctor_name.setAttribute("value","Antônio");



  description = document.createElement("input");
  description.setAttribute("id", "description");
  description.setAttribute("value", "Exame de sangue");

  container.appendChild(title);
  container.appendChild(patient_cpf);
  container.appendChild(patient_name);
  container.appendChild(doctor_crm);
  container.appendChild(doctor_name);
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
    patient_cpf: "71194505490",
    patient_name: "Allan",
    doctor_crm: "4659",
    doctor_name: "Antônio",
    description: "Exame de sangue"
  };


  expect(expected).toEqual(got);
});



it('testando a renderização a page Exam', () => {
  const component = renderer.create(Exam);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot(); 

  
})
