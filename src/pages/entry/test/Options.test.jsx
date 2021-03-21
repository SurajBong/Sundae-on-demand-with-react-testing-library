import { render, screen } from "@testing-library/react";

import Options from "../Options";

test("displays image from each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);

  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays image from each topping option from server", async () => {
  render(<Options optionType="toppings" />);

  const images = await screen.findAllByRole("img", { name: /topping$/i });

  expect(images).toHaveLength(3);

  const imageTitles = images.map((element) => element.alt);

  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot Fudge topping",
  ]);
});
