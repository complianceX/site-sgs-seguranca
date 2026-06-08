import { render, screen } from "@testing-library/react";
import { createRootRoute, createRoute, createRouter, RouterProvider } from "@tanstack/react-router";
import { Header } from "../landing/Header";

jest.mock("@/assets/logo-sgs.webp", () => "logo-mock.png");

function createTestRouter() {
  const rootRoute = createRootRoute();
  const indexRoute = createRoute({ path: "/", getParentRoute: () => rootRoute, component: Header });
  const routeTree = rootRoute.addChildren([indexRoute]);
  return createRouter({ routeTree, context: {} });
}

describe("Header", () => {
  it("renders the logo", () => {
    const router = createTestRouter();
    render(<RouterProvider router={router} />);
    expect(screen.getByAltText("SGS Segurança")).toBeInTheDocument();
  });
});
