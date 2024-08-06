import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Configura o servidor do MSW com os manipuladores definidos
export const server = setupServer(...handlers);
