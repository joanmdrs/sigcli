import renderer from 'react-test-renderer';
import {getValuesInput} from "../services/AppointmentServices.js";
import Appointment from "../pages/Appointment/Appointment";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
let title = null;
let patient_cpf = null;
let doctor_crm = null;
let data_appointment = null;
let hour_appointment = null;
let description = null;


beforeEach(() => {
  container = document.createElement("div");

  title = document.createElement("input");
  title.setAttribute("id", "title");
  title.setAttribute("value", "Consulta");

  patient_cpf = document.createElement("input");
  patient_cpf.setAttribute("id", "patient-cpf");
  patient_cpf.setAttribute("value","71194505490");

  doctor_crm = document.createElement("input");
  doctor_crm.setAttribute("id", "doctor-crm");
  doctor_crm.setAttribute("value","4659");

  data_appointment = document.createElement("input");
  data_appointment.setAttribute("id", "data-appointment");
  data_appointment.setAttribute("value","2022-05-26");

  hour_appointment = document.createElement("input");
  hour_appointment.setAttribute("id", "hour-appointment");
  hour_appointment.setAttribute("value","09:50");

  description = document.createElement("input");
  description.setAttribute("id", "description");
  description.setAttribute("value", "Consulta cardiaca");

  container.appendChild(title);
  container.appendChild(patient_cpf);
  container.appendChild(doctor_crm);
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
it("Retornando a Descrição da Consulta", () => {

  const got = getValuesInput();
  const expected = {
    title: "Consulta",
    data_appointment: "2022-05-26",
    hour_appointment: "09:50",
    description: "Consulta cardiaca",
    patient_fk: "71194505490",
    doctor_fk: "4659",
  };


  expect(expected).toEqual(got);
});


// Teste de renderização de tela
it('Testando a renderização da page Appointment', () => {
    const component = renderer.create(Appointment);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
}) 