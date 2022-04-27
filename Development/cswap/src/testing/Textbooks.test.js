import { render } from "@testing-library/react";
import Textbooks from "../pages/Textbooks";

test("Can find textbooks", () => {
    const products = Textbooks.getProducts();
    expect(products.length).toBeGreaterThan(0);
});

test("Textbook page rendering properly", () => {
    render(<Textbooks />);
    const textbooks = screen.getByText("Textbooks");

    expect(textbooks).toBeInTheDocument();
});