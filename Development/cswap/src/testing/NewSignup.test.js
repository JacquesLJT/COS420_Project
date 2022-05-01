import NewSignup from "../components/NewSignup";
import { render, screen } from "@testing-library/react";

test("Render NewSignup", () => {
    render (<NewSignup />);

    const Email =  screen.getByPlaceholderText("Email");
    const Password =  screen.getByPlaceholderText("Password");
    const ConfirmPassword =  screen.getByPlaceholderText("Confirm Password");
    const SignUp =  screen.getByText("Sign Up");

    expect(Email).toBeInTheDocument();
    expect(Password).toBeInTheDocument();
    expect(ConfirmPassword).toBeInTheDocument();
    expect(SignUp).toBeInTheDocument();
});

test("Logout undifined", () => {
    const logout = NewSignup.logout;
    expect(logout).toBeUndefined();
});