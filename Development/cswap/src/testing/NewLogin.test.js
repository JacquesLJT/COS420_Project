import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewLogin from "../components/NewLogin";

it("submits", () => {
  const onSubmit = jest.fn();
  const { getByTestId } = render(<NewLogin onSubmit={onSubmit} />);
  fireEvent.submit(getByTestId("form"));
  expect(onSubmit).toHaveBeenCalled();
});

it("Google Sign In", () => {
    const onGoogleSignIn = jest.fn();
    const { getByTestId } = render(<NewLogin onGoogleSignIn={onGoogleSignIn} />);
    fireEvent.click(getByTestId("google-signin"));
    expect(onGoogleSignIn).toHaveBeenCalled();
    });

it("Facebook Sign In", () => {
    const onFacebookSignIn = jest.fn();
    const { getByTestId } = render(<NewLogin onFacebookSignIn={onFacebookSignIn} />);
    fireEvent.click(getByTestId("facebook-signin"));
    expect(onFacebookSignIn).toHaveBeenCalled();
    });