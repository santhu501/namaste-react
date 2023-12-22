import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


describe("contact us page test cases", () => {
    test("Test the contact us component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    test("Should load button inside contact us component", () => {
        render(<Contact />);
        const button = screen.getByRole("button"); // we can use screen.getByText("submit") also.
        expect(button).toBeInTheDocument();
    });

    test("should load input inside contact us component", () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    });

    test("should load two input boxes contact us component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    });
});
