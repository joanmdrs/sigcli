import { render, screen, fireEvent } from '@testing-library/react';
import FormDoctor from './FormDoctor';

it("renders the form doctor's page", () => {
    render(<FormDoctor handleSaveButton={() => {}} />);
    expect(screen.getByLabelText("CRM:")).toBeInTheDocument();
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
});

it("clicks on the cancel button when creating a doctor", () => {
    render(<FormDoctor handleSaveButton={() => {handleClickButtonSave}} />);
    const crm = screen.getByPlaceholderText("Ex.: 0000-UF");
    const name = screen.getByPlaceholderText("Name");
    const username = screen.getByPlaceholderText("Username");
    const password = screen.getByPlaceholderText("Password");
    const phone = screen.getByPlaceholderText("Phone");
    const email = screen.getByPlaceholderText("Email");

    crm.value = "7777-RN";
    name.value = "Dr. João";
    username.value = "joao";
    password.value = "123";
    phone.value = "84987745660";
    email.value = "joao@gmail.com";

    fireEvent.click(screen.getByText('Cancel'));
    expect(crm.value).toEqual("");
    expect(name.value).toEqual("");
    expect(username.value).toEqual("");
    expect(password.value).toEqual("");
    expect(phone.value).toEqual("");
    expect(email.value).toEqual("");
})
