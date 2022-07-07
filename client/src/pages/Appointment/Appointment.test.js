import renderer from 'react-test-renderer';
import {getValuesInput} from "../../services/AppointmentServices.js";
import Appointment from "./Appointment";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
let title = null;
let patient_cpf = null;
let patient_name = null;
let doctor_crm = null;
let doctor_name = null;
let data_appointment = null;
let hour_appointment = null;
let description = null;


beforeEach(() => {
  container = document.createElement("div");

  title = document.createElement("input");
  title.setAttribute("id", "title");
  title.setAttribute("value", "Consulta");

  patient_cpf = document.createElement("input");
  patient_cpf.setAttribute("id", "pacient-cpf");
  patient_cpf.setAttribute("value","11215464809");

  patient_name = document.createElement("input");
  patient_name.setAttribute("id", "pacient-name");
  patient_name.setAttribute("value", "Rauan");

  doctor_crm = document.createElement("input");
  doctor_crm.setAttribute("id", "doctor-crm");
  doctor_crm.setAttribute("value","4659");

  doctor_name = document.createElement("input");
  doctor_name.setAttribute("id", "doctor-name");
  doctor_name.setAttribute("value", "Flavius");

  data_appointment = document.createElement("input");
  data_appointment.setAttribute("id", "data-appointment");
  data_appointment.setAttribute("value","05-26-2022");

  hour_appointment = document.createElement("input");
  hour_appointment.setAttribute("id", "hour-appointment");
  hour_appointment.setAttribute("value","12:50");

  description = document.createElement("input");
  description.setAttribute("id", "description");
  description.setAttribute("value", "Consulta cardiaca");

  container.appendChild(title);
  container.appendChild(patient_cpf);
  container.appendChild(patient_name);
  container.appendChild(doctor_crm);
  container.appendChild(doctor_name);
  container.appendChild(data_appointment);
  container.appendChild(hour_appointment);
  container.appendChild(description);
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});


//Teste getValuesInput
it("returns the patient's cpf", () => {

  const got = getValuesInput();
  const expected = {
    title: "Consulta",
    patient_cpf: "11215464809",
    patient_name: "Rauan",
    doctor_crm: "4659",
    doctor_name: "Flavius",
    data_appointment: "05-26-2022",
    hour_appointment: "12:50",
    description: "Consulta cardiaca"
  };


  expect(expected).toEqual(got);
});


// Teste de renderização de tela
it('Testando a renderização da page Appointment', () => {
    const component = renderer.create(Appointment);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
}) 