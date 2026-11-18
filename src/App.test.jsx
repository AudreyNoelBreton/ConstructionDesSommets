import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Soumission from "./Sections/Soumission/soumission";

vi.mock("react-responsive", () => ({
  useMediaQuery: () => false,
}));

describe("Soumission", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders the required quote request fields", () => {
    render(<Soumission />);

    expect(screen.getByText("Demander une soumission")).toBeInTheDocument();

    [
      "Nom",
      "Numéro de téléphone",
      "Lieu des travaux",
      "Résumé du projet",
      "Courriel",
    ].forEach((placeholder) => {
      expect(screen.getByPlaceholderText(placeholder)).toBeRequired();
    });

    expect(
      screen.getByPlaceholderText(/^Début des travaux souhaité/)
    ).toBeRequired();
  });

  test("asks the visitor to attach plans before opening the email", () => {
    const confirm = vi.spyOn(window, "confirm").mockReturnValue(false);
    const { container } = render(<Soumission />);

    fireEvent.submit(container.querySelector("form"));

    expect(confirm).toHaveBeenCalledWith(
      "N'oubliez pas de joindre vos plans en pièces jointes dans le courriel."
    );
  });
});
