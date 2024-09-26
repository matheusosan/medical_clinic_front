import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Cadastrar from ".";
import { FORM_ERRORS_MESSAGES } from "../../constants/form-errors";
import { fireEvent, render, screen } from "../../utils/test-utils";
import HomePage from "../Home";

const newUser = {
  name: "teste1",
  birthDate: "2000-01-01",
  cpf: "999.999.999-99",
  password: "123456",
  phoneNumber: "51999999999",
  email: "mail@mail.com",
};

describe("<Signup>", () => {
  it("should create a user correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/cadastrar"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </MemoryRouter>
    );

    const nameInput = screen.getByPlaceholderText(/digite seu nome/i);
    const birthInput = screen.getByPlaceholderText(
      /digite sua data de nascimento/i
    );
    const cpfInput = screen.getByPlaceholderText(/digite seu cpf/i);
    const passwordInput = screen.getByPlaceholderText(/crie uma senha/i);

    const phoneInput = screen.getByPlaceholderText(
      /digite seu número de telefone/i
    );
    const emailInput = screen.getByPlaceholderText(/digite seu email/i);
    const submitButton = screen.getByTestId("submit-btn");

    fireEvent.change(nameInput, { target: { value: newUser.name } });
    fireEvent.change(birthInput, { target: { value: newUser.birthDate } });
    fireEvent.change(cpfInput, { target: { value: newUser.cpf } });
    fireEvent.change(passwordInput, { target: { value: newUser.password } });
    fireEvent.change(phoneInput, { target: { value: newUser.phoneNumber } });
    fireEvent.change(emailInput, { target: { value: newUser.email } });

    fireEvent.submit(submitButton);

    const homeText = await screen.findByText(/bem-vindo/i);

    expect(nameInput).toHaveValue(newUser.name);
    expect(birthInput).toHaveValue(newUser.birthDate);
    expect(cpfInput).toHaveValue(newUser.cpf);
    expect(passwordInput).toHaveValue(newUser.password);

    expect(phoneInput).toHaveValue(newUser.phoneNumber);
    expect(emailInput).toHaveValue(newUser.email);
    expect(homeText).toBeInTheDocument();
  });

  it("should return to homepage when Cancelar button was clicked", () => {
    render(
      <MemoryRouter initialEntries={["/cadastrar"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </MemoryRouter>
    );

    const returnBtn = screen.getByText(/cancelar/i);

    fireEvent.click(returnBtn);

    expect(screen.getByText(/bem-vindo/i)).toBeInTheDocument();
  });

  it("should display error messages when form has submited raw", async () => {
    render(
      <MemoryRouter initialEntries={["/cadastrar"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
      </MemoryRouter>
    );

    const submitButton = screen.getByTestId("submit-btn");

    fireEvent.submit(submitButton);

    const nameErrorMessage = await screen.findByText(FORM_ERRORS_MESSAGES.NAME);
    const birthDateErrorMessage = await screen.findByText(
      FORM_ERRORS_MESSAGES.BIRTHDATE
    );
    const cpfErrorMessage = await screen.findByText(FORM_ERRORS_MESSAGES.CPF);
    const passwordErrorMessage = await screen.findByText(
      FORM_ERRORS_MESSAGES.PASSWORD
    );

    const phoneErrorMessage = await screen.findByText(
      FORM_ERRORS_MESSAGES.PHONENUMBER
    );
    const emailErrorMessage = await screen.findByText(
      FORM_ERRORS_MESSAGES.EMAIL
    );

    expect(nameErrorMessage).toBeInTheDocument();
    expect(birthDateErrorMessage).toBeInTheDocument();
    expect(cpfErrorMessage).toBeInTheDocument();
    expect(passwordErrorMessage).toBeInTheDocument();
    expect(phoneErrorMessage).toBeInTheDocument();
    expect(emailErrorMessage).toBeInTheDocument();
  });
});
