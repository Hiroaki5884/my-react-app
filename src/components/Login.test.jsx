import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("renders email and password fields", () => {
  render(<Login />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});
