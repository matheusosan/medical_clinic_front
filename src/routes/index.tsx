import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import Agendamento from "../pages/Agendamento";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/agendamento",
    element: <Agendamento />,
  },
]);
