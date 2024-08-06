import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <motion.header className="flex items-center justify-between px-[15%] w-full h-[12vh] fixed bg-white top-0 z-50">
      <Link to={"/"} className="font-bold">
        LOGOEMPRESA
      </Link>

      <nav className="flex items-center justify-center gap-20">
        <a className="font-bold" href="/">
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

      <div className="flex gap-4">
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
      </div>
    </motion.header>
  );
}
