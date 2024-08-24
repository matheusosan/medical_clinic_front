import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import LOGO from "/LOGO.png";

export default function Header() {
  return (
    <motion.header className="flex items-center justify-between px-[15%] w-full h-[12vh] fixed bg-white top-0 z-50">
      <Link to={"/"} className="font-bold">
        <img src={LOGO} alt="" className="w-10 h-10" />
      </Link>

      <nav className="flex items-center justify-center gap-20">
        <a className="font-bold" href="/#home">
          Home
        </a>
        <a className="font-bold" href="/#especialidades">
          Especialidades
        </a>
        <a className="font-bold" href="/#sobre">
          Sobre Nós
        </a>
        <a className="font-bold" href="/#contato">
          Contato
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to={"/agendamento"}
          className="rounded-xl px-6 py-2 text-white font-bold bg-[#0B4FFF]"
        >
          Agendar
        </Link>

        <Link
          to={"/cadastrar"}
          className="rounded-xl px-6 py-2 text-[#0B4fff] font-bold border border-[#0B4FFF]"
        >
          Cadastrar-se
        </Link>
        <Link to={"/perfil"}>
          <UserRound className="h-8 w-8 text-[#0B4FFF]" />
        </Link>
      </div>
    </motion.header>
  );
}
