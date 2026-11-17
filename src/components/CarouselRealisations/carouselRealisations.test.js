import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import CarouselRealisations from "./carouselRealisations";

const CurrentPath = () => {
  const { pathname } = useLocation();
  return <span data-testid="current-path">{pathname}</span>;
};

test("navigates to a project when its carousel button is activated", () => {
  render(
    <MemoryRouter>
      <CarouselRealisations
        images={[
          {
            image1: "/project.jpg",
            text: "La consécration",
            url: "/realisations/consecration",
          },
        ]}
      />
      <CurrentPath />
    </MemoryRouter>
  );

  fireEvent.click(
    screen.getByRole("button", { name: "Voir le projet La consécration" })
  );

  expect(screen.getByTestId("current-path")).toHaveTextContent(
    "/realisations/consecration"
  );
});
