import { GifItem } from "../assets/components/GifItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas en GifItem", () => {
  const title = "saitama";
  const url = "https://one-punch.com/saitama.jpg";

  const { container } = render("match con el snapshot", () => {});

  expect(screen.getByRole("img").src);
});
