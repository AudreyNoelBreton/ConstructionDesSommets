import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import ProjectDetail from "./projectDetail";

const CurrentPath = () => {
  const { pathname } = useLocation();
  return <span data-testid="current-path">{pathname}</span>;
};

test("renders the project gallery for its route", () => {
  render(
    <MemoryRouter initialEntries={["/realisations/garage-vert"]}>
      <Routes>
        <Route
          path="/realisations/:projectSlug"
          element={<ProjectDetail />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: "Garage vert" })
  ).toBeInTheDocument();
  expect(screen.getAllByRole("img", { name: /Projet Garage vert - vue/ })).toHaveLength(
    21
  );
});

test("redirects unknown project routes to the projects index", async () => {
  render(
    <MemoryRouter initialEntries={["/realisations/inconnu"]}>
      <Routes>
        <Route
          path="/realisations/:projectSlug"
          element={<ProjectDetail />}
        />
        <Route path="/realisations" element={<h1>Nos réalisations</h1>} />
      </Routes>
      <CurrentPath />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByTestId("current-path")).toHaveTextContent(
      "/realisations"
    );
  });
  expect(
    screen.getByRole("heading", { name: "Nos réalisations" })
  ).toBeInTheDocument();
});

test("renders the L’Altitude project gallery", () => {
  render(
    <MemoryRouter initialEntries={["/realisations/altitude"]}>
      <Routes>
        <Route
          path="/realisations/:projectSlug"
          element={<ProjectDetail />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: "L’Altitude" })
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("img", { name: /Projet L’Altitude - vue/ })
  ).toHaveLength(60);
});

test("renders the L’Amont project gallery", () => {
  render(
    <MemoryRouter initialEntries={["/realisations/amont"]}>
      <Routes>
        <Route
          path="/realisations/:projectSlug"
          element={<ProjectDetail />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: "L’Amont" })).toBeInTheDocument();
  expect(
    screen.getAllByRole("img", { name: /Projet L’Amont - vue/ })
  ).toHaveLength(21);
});

test("renders the Les Cimes project gallery", () => {
  render(
    <MemoryRouter initialEntries={["/realisations/les-cimes"]}>
      <Routes>
        <Route
          path="/realisations/:projectSlug"
          element={<ProjectDetail />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByRole("heading", { name: "Les Cimes" })).toBeInTheDocument();
  expect(screen.getAllByRole("img", { name: /Projet Les Cimes - vue/ })).toHaveLength(
    6
  );
});
