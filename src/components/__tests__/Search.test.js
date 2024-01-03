import { render } from "@testing-library/react"
import Body from "../Body"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the Body Component with Search", ()=>{
    render(<Body/>);
});