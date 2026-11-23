import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Soumission from "./Sections/Soumission/soumission";

describe("Soumission", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders the required quote request fields", () => {
    render(<Soumission />);

    expect(
      screen.getByRole("heading", { name: "Demander une soumission" })
    ).toBeInTheDocument();

    [
      "Nom",
      "Numéro de téléphone",
      "Lieu des travaux",
      "Début des travaux souhaité",
      "Résumé du projet",
      "Courriel",
    ].forEach((label) => {
      expect(screen.getByLabelText(label)).toBeRequired();
    });
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
