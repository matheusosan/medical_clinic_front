import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import HomePage from ".";
import { fireEvent, render, screen } from "../../utils/test/test-utils";
import Agendamento from "../Agendamento";

describe("<Home />", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </MemoryRouter>
  );
  it("should redirect to appointment page when Faça seu agendamento button is clicked", () => {
    const homeText = screen.getByText(/BEM-VINDO A MEDICAL CLINIC/i);

    expect(homeText).toBeInTheDocument();

    const appointBtn = screen.getByTestId("btn");

    fireEvent.click(appointBtn);

    const appointmentText = screen.getByText(
      /selecione a especialidade desejada/i
    );

    expect(homeText).not.toBeInTheDocument();
    expect(appointmentText).toBeInTheDocument();
  });
});
