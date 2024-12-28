import { createBrowserRouter } from "react-router-dom";

import Agendamento from "../features/appointment/pages/Agendamento";
import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import Profile from "../features/profile/pages";
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
    element: <Signup />,
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
