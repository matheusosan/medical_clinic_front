import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      id="home"
      className="flex items-center home-background w-full h-[60vh] md:h-[70vh] px-6 lg:px-[15%] text-white"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-8"
      >
        <h2 className="text-2xl md:text-5xl font-extrabold">
          BEM-VINDO <br />A MEDICAL CLINIC
        </h2>
        <p className="text-md lg:text-xl w-full lg:w-[520px] lg:leading-9">
          Na Medical Clinic, oferecemos cuidados de saúde excepcionais com uma
          equipe altamente qualificada. Com atendimento personalizado e de alta
          qualidade, garantimos que você estará em boas mãos conosco. Sua saúde
          e bem-estar são nossa prioridade.
        </p>
        <Link
          data-testid="btn"
          to={"/agendamento"}
          className="flex items-center justify-center text-center md:text-left w-40 lg:w-[325px] h-[50px] md:h-[70px] rounded-3xl text-sm lg:text-xl font-bold bg-[#0B4FFF] outline-none text-white"
        >
          FAÇA SEU AGENDAMENTO
        </Link>
      </motion.div>
    </section>
  );
}
