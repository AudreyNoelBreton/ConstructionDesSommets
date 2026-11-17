import { fireEvent, render, screen } from "@testing-library/react";
import Link from "./link";

test("expands and collapses with an accessible button", () => {
  render(<Link title="Questions" text="Réponse" />);

  const button = screen.getByRole("button", { name: "Questions" });
  const contentId = button.getAttribute("aria-controls");

  expect(button).toHaveAttribute("aria-expanded", "false");
  expect(document.getElementById(contentId)).toHaveTextContent("Réponse");

  fireEvent.click(button);
  expect(button).toHaveAttribute("aria-expanded", "true");

  fireEvent.click(button);
  expect(button).toHaveAttribute("aria-expanded", "false");
});
