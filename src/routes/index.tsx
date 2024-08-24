import { createBrowserRouter } from "react-router-dom";

import Agendamento from "../pages/Agendamento";
import HomePage from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Cadastrar from "../pages/Signup";

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
  {
    path: "/perfil",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
