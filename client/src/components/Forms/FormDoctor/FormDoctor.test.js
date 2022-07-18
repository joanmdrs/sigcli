import { render, screen } from '@testing-library/react';
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
