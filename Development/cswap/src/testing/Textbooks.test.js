import { render } from "@testing-library/react";
import Textbooks from "../pages/Textbooks";

test("Textbook page rendering properly", () => {
    render(<Textbooks />);
    const textbooks = screen.getByText("Textbooks");

    expect(textbooks).toBeInTheDocument();
});

test("Logout undifined", () => {
    const logout = Textbooks.logout;
    expect(logout).toBeUndefined();
});