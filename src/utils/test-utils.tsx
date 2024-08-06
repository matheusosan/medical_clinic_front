// src/test-utils.tsx
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Cadastrar from "../pages/Signup";
import Agendamento from "../pages/Agendamento";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
    },
  },
});

const TestRouter = ({
  children,
  initialEntries = ["/"],
}: {
  children: React.ReactNode;
  initialEntries?: string[];
}) => (
  <MemoryRouter initialEntries={initialEntries}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/agendamento" element={<Agendamento />} />
    </Routes>
    {children}
  </MemoryRouter>
);

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render, TestRouter };
