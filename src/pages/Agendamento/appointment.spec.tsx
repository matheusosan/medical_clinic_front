import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Agendamento from ".";
import { render, screen, waitFor } from "../../utils/test-utils";
import HomePage from "../Home";

describe("<Appointment>", () => {
  it("should create a user correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/agendamento"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Dermatologia")).toBeInTheDocument()
    );

    screen.debug();
  });
});
