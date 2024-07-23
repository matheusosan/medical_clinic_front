import React from "react";
import { motion } from "framer-motion";
import Man from "../../../public/MAN.png";
import Hearth from "../../../public/HEARTICON.png";
import Bone from "../../../public/BONE.png";
import Dermato from "../../../public/DERMATO.png";
import Pediatria from "../../../public/PEDIATRIA.png";
import Tooth from "../../../public/TOOTH.png";
import Woman from "../../../public/WOMAN.png";

const services = [
  {
    name: "Cardiologia",
    description:
      "Nosso serviço de Cardiologia oferece diagnósticos precisos e tratamentos eficazes para doenças do coração e do sistema circulatório. Nossa equipe está preparada para cuidar da sua saúde cardiovascular com o máximo de atenção e cuidado.",
    icon: Hearth,
  },
  {
    name: "Dermatologia",
    description:
      "A Dermatologia da Medical Clinic cuida da saúde da sua pele, cabelos e unhas. Oferecemos tratamentos para diversas condições dermatológicas, além de procedimentos estéticos para melhorar sua aparência e bem-estar.",
    icon: Dermato,
  },
  {
    name: "Pediatria",
    description:
      "Nossa equipe de Pediatria é especializada em cuidar da saúde e do desenvolvimento de crianças e adolescentes. Oferecemos atendimento humanizado e acompanhamento integral para garantir o bem-estar dos pequenos pacientes.",
    icon: Pediatria,
  },
  {
    name: "Ortopedia",
    description:
      "O serviço de Ortopedia da [Nome da Clínica] trata de doenças e lesões do sistema músculo-esquelético. Nossos ortopedistas estão prontos para oferecer o melhor tratamento, desde pequenas lesões até cirurgias complexas.",
    icon: Bone,
  },
  {
    name: "Ginecologia",
    description:
      "Na Ginecologia, cuidamos da saúde da mulher em todas as fases da vida. Oferecemos desde consultas de rotina até tratamentos especializados, sempre com um atendimento acolhedor e respeitoso.",
    icon: Woman,
  },
  {
    name: "Odontologia",
    description:
      "Nosso serviço de Odontologia oferece cuidados completos para a saúde bucal. Desde consultas de rotina e limpeza dental até procedimentos complexos, estamos comprometidos em proporcionar um sorriso saudável e bonito para você.",
    icon: Tooth,
  },
];

export default function Specialities() {
  return (
    <section className="flex justify-between px-24 py-32">
      <div className="flex flex-col items-center justify-center gap-12">
        <h2 className="text-4xl font-bold">NOSSAS ESPECIALIDADES</h2>
        <div className="grid grid-cols-3 w-[928px] h-[660px] gap-4">
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="flex flex-col items-center justify-center gap- w-[300px] h-[320px] border border-[#0B4FFF] rounded-xl px-4"
            >
              <img src={service.icon} alt="" />
              <h2 className="text-2xl font-extrabold">{service.name}</h2>
              <p className="leading-tights text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <img src={Man} alt="" />
    </section>
  );
}