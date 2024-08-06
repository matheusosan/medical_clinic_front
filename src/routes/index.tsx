import { createBrowserRouter } from "react-router-dom";

import Agendamento from "../pages/Agendamento";
import Cadastrar from "../pages/Signup";
import HomePage from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/agendamento",
    element: <Agendamento />,
  },
  {
    path: "/cadastrar",
    element: <Cadastrar />,
  },
]);
