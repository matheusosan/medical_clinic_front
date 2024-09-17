import Cookies from "js-cookie";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Profile from ".";
import {
  profileAppointmentsResponse,
  profileResponse,
} from "../../mocks/responses/profileResponse";
import { render, screen } from "../../utils/test-utils";
import Login from "../Login";

describe("<Profile>", () => {
  it("should display user data and appointments correctly", async () => {
    Cookies.set("access_token", "valid_token");

    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </MemoryRouter>
    );

    const username = await screen.findByText(profileResponse.name);
    const appointments1 = await screen.findByText(
      profileAppointmentsResponse[0].service.name
    );
    const appointments2 = await screen.findByText(
      profileAppointmentsResponse[1].service.name
    );
    const appointments3 = await screen.findByText(
      profileAppointmentsResponse[2].service.name
    );

    expect(username).toBeInTheDocument();
    expect(appointments1).toBeInTheDocument();
    expect(appointments2).toBeInTheDocument();
    expect(appointments3).toBeInTheDocument();
  });

  it("should redirect to login if token was invalid or don't exists", async () => {
    Cookies.remove("access_token");

    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    const profile = screen.queryByText(/perfil/i);
    expect(profile).not.toBeInTheDocument();

    const login = await screen.findByTestId("submit-btn");
    expect(login).toBeInTheDocument();
  });
});