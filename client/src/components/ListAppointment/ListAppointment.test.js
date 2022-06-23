import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import {ListAppointment} from "./ListAppointment";

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
      title: "consulta",
      patient_cpf: "13064465465",
      patient_name: "joan de azevedo medeiros",
      data_appointment: "2022-06-22",
      doctor_name: "flavius gorgonio",
    },
  ];
  act(() => {
    root.render(<ListAppointment appointments={appointment} />);
  });
  expect(container.textContent).toContain("joan de azevedo medeiros");
});
