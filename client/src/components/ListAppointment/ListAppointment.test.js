import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ListAppointment from "./ListAppointment";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
});

it("returns the appointment patient's name", () => {
  const root = createRoot(container);
  const appointment = [
    {
      'title': "Consulta",
      'data_appointment': "2022-05-26",
      'hour_appointment': "09:50",
      'description': "Consulta cardiaca",
      'patient_fk': "71194505490",
      'doctor_fk': "4659",
    },
  ];

  act(() => {
    root.render(<ListAppointment appointments={appointment} setFields={()=>{}} handleDelete={()=>{}} />);
  });
  expect(container.textContent).toContain("71194505490");

});
