import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:"Login"});
    expect(loginButton).toBeInTheDocument();
});

it("Should render Header component with Cart 0 items", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - 0 Items");
    expect(cartItems).toBeInTheDocument();
});

it("Should render Header component with a Cart", () =>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/); // we can pass a regex also.
    expect(cartItems).toBeInTheDocument();
});