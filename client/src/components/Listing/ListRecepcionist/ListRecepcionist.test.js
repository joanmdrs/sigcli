import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import {ListRecepcionist} from "./ListRecepcionist";

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

it("returns the recepcionist's cpf", () => {
  const root = createRoot(container);
  const recepcionist = [
    {
      name: "Manoela",
      cpf: "12343543543",
      phone:"84999654534",
      email:"manoela@gmail.com",
    },
  ];
  act(() => {
    root.render(<ListRecepcionist recepcionists={recepcionist} />);
  });
  expect(container.textContent).toContain("12343543543");
});
