import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import { afterEach, vi } from "vitest";
import CarouselRealisations from "./carouselRealisations";

const CurrentPath = () => {
  const { pathname } = useLocation();
  return <span data-testid="current-path">{pathname}</span>;
};

afterEach(() => {
  vi.useRealTimers();
});

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

test("loops continuously from the last project back to the first", () => {
  vi.useFakeTimers();
  const projects = ["Premier", "Deuxième", "Troisième"].map((text) => ({
    image1: `/${text}.jpg`,
    text,
    url: `/realisations/${text.toLowerCase()}`,
  }));
  const { container } = render(
    <MemoryRouter>
      <CarouselRealisations images={projects} />
    </MemoryRouter>
  );
  const activeProject = () =>
    screen
      .getAllByRole("button")
      .find((button) => button.getAttribute("aria-current") === "true")
      .getAttribute("aria-label");
  const advance = () => {
    act(() => vi.advanceTimersByTime(5000));
    act(() => vi.advanceTimersByTime(500));
  };

  expect(activeProject()).toBe("Voir le projet Premier");

  advance();
  expect(activeProject()).toBe("Voir le projet Deuxième");

  advance();
  expect(activeProject()).toBe("Voir le projet Troisième");

  advance();
  expect(activeProject()).toBe("Voir le projet Premier");
  expect(
    container.querySelector(".carouselRealisations__container")
  ).not.toHaveClass("animating");
});
