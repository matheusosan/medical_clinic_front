import { motion } from "framer-motion";
import About from "/ABOUT_US.png";

export default function AboutUs() {
  return (
    <section id="sobre" className="flex justify-center gap-24">
      <motion.img src={About} alt="" />
      <div className="flex flex-col gap-6">
        <h2 className="font-extrabold text-[#0B4FFF] text-4xl">SOBRE NÓS</h2>
        <p className="w-[540px]">
          Na <span className="text-[#0B4FFF] font-bold">Medical Clinic</span>{" "}
          nossa missão é oferecer cuidados de saúde excepcionais, com um
          compromisso inabalável com a excelência e o bem-estar dos nossos
          pacientes. Com uma equipe de profissionais altamente qualificados,
          abrangendo uma ampla gama de especialidades médicas, estamos dedicados
          a proporcionar um atendimento personalizado, humanizado e eficiente.{" "}
          <br />
          <br />
          Nossa clínica foi fundada com o objetivo de criar um ambiente
          acolhedor e seguro, onde cada paciente é tratado com respeito e
          atenção. Investimos continuamente em tecnologia de ponta e em práticas
          inovadoras para garantir diagnósticos precisos e tratamentos eficazes.
          <br />
          <br />
          Acreditamos na importância de um atendimento integral, onde a
          prevenção e o acompanhamento constante são pilares fundamentais. Nosso
          compromisso é estar ao seu lado em cada etapa do cuidado com a saúde,
          oferecendo suporte e orientação para uma vida mais saudável.
          <br />
          <br />{" "}
          <span className="text-[#0B4FFF] font-bold">Na Medical Clinic</span>,
          você encontrará um espaço onde sua saúde e bem-estar são nossa
          prioridade. Trabalhamos para construir uma relação de confiança e
          respeito, proporcionando a você e sua família o melhor em cuidados de
          saúde.
        </p>
      </div>
    </section>
  );
}
