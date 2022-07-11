import {getValuesInput} from "../services/RecepcionistServices.js";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container = null;
let nameRecepcionist = null;
let cpf = null;
let phone = null;
let email = null;
let username = null;
let password = null;
beforeEach(() => {
  container = document.createElement("div");
  nameRecepcionist = document.createElement("input");
  nameRecepcionist.setAttribute("id", "name");
  nameRecepcionist.setAttribute("value", "Bruna");

  cpf = document.createElement("input");
  cpf.setAttribute("id", "cpf");
  cpf.setAttribute("value","12387698787");

  phone = document.createElement("input");
  phone.setAttribute("id", "phone");
  phone.setAttribute("value", "84999342312");
  
  email = document.createElement("input")
  email.setAttribute("id", "email");
  email.setAttribute("value", "bruna@gmail.com");

  username = document.createElement("input")
  username.setAttribute("id", "username");
  username.setAttribute("value","bruninha");

  password = document.createElement("input");
  password.setAttribute("id", "password");
  password.setAttribute("value","123abc");
  
  container.appendChild(nameRecepcionist);
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

it("returns the recepcionist's cpf", () => {
  
  const got = getValuesInput();
  const expected = {
    name: "Bruna",
    cpf: "12387698787",
    phone: "84999342312",
    email: "bruna@gmail.com",
    username: "bruninha",
    password: "123abc",
  };
 
  
  expect(expected).toEqual(got);
});
