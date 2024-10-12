import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Agendamento from ".";
import { FORM_ERRORS_MESSAGES } from "../../constants/form-errors";
import { user, validCpf } from "../../mocks/responses/clientByCpfResponse";
import { fireEvent, render, screen } from "../../utils/test-utils";
import HomePage from "../Home";

describe("<Appointment>", () => {
  it("should display the error messages when inputs are not set correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/agendamento"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </MemoryRouter>
    );

    const cpfInput = screen.getByPlaceholderText(/digite seu cpf/i);
    const submitCpfButton = screen.getByText(/buscar/i);
    const submitFormButton = screen.getByText("AGENDAR");

    fireEvent.change(cpfInput, { target: { value: "22222222222" } });
    fireEvent.click(submitCpfButton);
    fireEvent.click(submitFormButton);

    const notFoundMessage = await screen.findByText(
      /Cadastro não encontrado, cadastre-se/i
    );
    const specialityErrorMessage = await screen.findByText(
      FORM_ERRORS_MESSAGES.SPECIALITY
    );
    const selectedDateErrorMessage = await screen.findByText(
      FORM_ERRORS_MESSAGES.APPOINTMENT_SELECTED_DATE
    );

    expect(notFoundMessage).toBeInTheDocument();
    expect(specialityErrorMessage).toBeInTheDocument();
    expect(selectedDateErrorMessage).toBeInTheDocument();

    screen.debug();
  });

  it("should create an appointment successfully", async () => {
    render(
      <MemoryRouter initialEntries={["/agendamento"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </MemoryRouter>
    );

    const cpfInput = screen.getByPlaceholderText(/digite seu cpf/i);
    const submitButton = screen.getByText(/buscar/i);

    fireEvent.change(cpfInput, { target: { value: validCpf } });
    fireEvent.click(submitButton);

    const email = await screen.findByText(user.email);
    const name = await screen.findByText(user.name);
    const birthDate = await screen.findByText(user.birthDate);
    const phoneNumber = await screen.findByText(user.phoneNumber);

    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(birthDate).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();

    const selectInput = screen.getByRole("search");
    const dateInput = screen.getByPlaceholderText(/selecione uma data/i);
    const hour = screen.getByText("11:00");

    const submitFormButton = screen.getByText("AGENDAR");

    fireEvent.change(selectInput, { target: { value: "2" } });
    fireEvent.change(dateInput, { target: { value: "2024-12-12" } });
    fireEvent.click(hour);

    fireEvent.click(submitFormButton);

    const homeText = await screen.findByText(/bem-vindo/i);

    expect(homeText).toBeInTheDocument();
  });
});
