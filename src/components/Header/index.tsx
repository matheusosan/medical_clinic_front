import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-between px-[15%] w-full h-[12vh]"
    >
      <h2 className="font-bold">LOGOEMPRESA</h2>

      <nav className="flex items-center justify-center gap-20">
        <a className="font-bold" href="">
          Home
        </a>
        <a className="font-bold" href="">
          Especialidades
        </a>
        <a className="font-bold" href="">
          Sobre Nós
        </a>
        <a className="font-bold" href="">
          Contato
        </a>
      </nav>

      <a
        className="rounded-3xl px-8 py-2 text-white font-bold text-xl bg-[#0B4FFF]"
        href=""
      >
        Agendar
      </a>
    </motion.header>
  );
}
