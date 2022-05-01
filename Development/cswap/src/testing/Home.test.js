import Home from '../components/Home';
import { render, screen } from '@testing-library/react';

test("Render Home", () => {
    render (<Home />);

    const Textbooks =  screen.getByText("Textbooks");
    const Apartments =  screen.getByText("Apartments");
    const Electronics =  screen.getByText("Electronics");
    const Furniture =  screen.getByText("Furniture");
    const Appliances =  screen.getByText("Appliances");

    expect(Textbooks).toBeInTheDocument();
    expect(Apartments).toBeInTheDocument();
    expect(Electronics).toBeInTheDocument();
    expect(Furniture).toBeInTheDocument();
    expect(Appliances).toBeInTheDocument();
});

test("Logout undifined", () => {
    const logout = Home.logout;
    expect(logout).toBeUndefined();
});