import { render, screen } from "@testing-library/react";
import RestaurantContainer from "../RestaurantContainer";
import MOCK_DATA from "../mocks/resContainerCardMock.json";
import "@testing-library/jest-dom";

it("Should Render Restaurant Container cards component with props data", ()=>{

    render(<RestaurantContainer
        resName={MOCK_DATA.name}
        cuisine={MOCK_DATA.cusines}
        rating={MOCK_DATA.avgRating}
        logo={MOCK_DATA.cloudinaryImageId}
        deliveryTime={MOCK_DATA.deliveryTime}
    />);

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");
    expect(name).toBeInTheDocument();
});