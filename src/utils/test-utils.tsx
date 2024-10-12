// src/test-utils.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { SidebarProvider } from "../context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0,
    },
  },
});

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>{children}</SidebarProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };
