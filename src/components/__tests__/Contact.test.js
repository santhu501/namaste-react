import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Test the contact us component",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load button inside contact us component",()=>{
    render(<Contact/>);
    const button = screen.getByRole("button"); // we can use screen.getByText("submit") also.
    expect(button).toBeInTheDocument();
})