// __tests__/fetch.test.js
import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../../App";

const server = setupServer(
  rest.get(
    "https://prevision-meteo.ch/services/json/aix-en-provence",
    (req, res, ctx) => {
      return res(
        ctx.json({
          current_condition: {
            icon_big:
              "https://prevision-meteo.ch/style/images/icon/nuit-legerement-voilee-big.png",
          },
        })
      );
    }
  ),
  rest.get(
    "https://randomuser.me/api/",
    (req, res, ctx) => {
      return res(
        ctx.json({results: [{
          name: {
            title: "Ms",
            first: "Vanja",
            last: "Bron",
          },
          picture: {
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg",
          }
        }]})
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("load meteo mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Météo actuel/i));
  expect(container.getElementsByTagName("img").length).toBe(1);
});

test("load user mock", async () => {
  const { container } = render(<App />);
  await waitFor(() => screen.getByText(/Vanja/i));
  expect(container.getElementsByTagName("span").length).toBe(1);
  expect(container.getElementsByTagName("img").length).toBe(2);
});