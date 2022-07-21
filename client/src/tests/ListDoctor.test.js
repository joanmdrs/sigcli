import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import ListDoctor from "../components/ListDoctor/ListDoctor";

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

it("returns the doctor's name", () => {
  const root = createRoot(container);
  const doctors = [
    {
      "name":"flavius",
      "crm":"123456789012",
    }
  ];
  act(() => {
    root.render(<ListDoctor doctors= {doctors} />);
  });
  expect(container.textContent).toContain("flavius");
});

it("returns doctor's crm", () => {
  const root = createRoot(container);
  const fakeDoctor = [
      {
          "name":"taciano",
          "crm":"123456789012",
      }
  ];
  act(() => {
      root.render(<ListDoctor doctors={fakeDoctor} />);
  });
  expect(container.textContent).toContain("123456789012");
});
