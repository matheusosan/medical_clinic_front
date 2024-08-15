import { motion } from "framer-motion";
import Man from "/MAN.png";
import Hearth from "/HEARTICON.png";
import Bone from "/BONE.png";
import Dermato from "/DERMATO.png";
import Pediatria from "/PEDIATRIA.png";
import Tooth from "/TOOTH.png";
import Woman from "/WOMAN.png";

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
      "O serviço de Ortopedia da Medical Clinic trata de doenças e lesões do sistema músculo-esquelético. Nossos ortopedistas estão prontos para oferecer o melhor tratamento, desde pequenas lesões até cirurgias complexas.",
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
    <section
      id="especialidades"
      className="flex flex-col md:flex-row justify-center md:justify-between md:px-24 md:py-32"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <h2 className="text-lg md:text-4xl font-bold">NOSSAS ESPECIALIDADES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-[928px] h-auto md:h-[660px] gap-4">
          {services.map((service) => (
            <motion.div
              key={service.name}
              className="flex flex-col items-center justify-center gap-3 w-[300px] h-[320px] border border-[#0b50ff52] rounded-xl px-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <img src={service.icon} alt="" />
              <h2 className="text-2xl font-extrabold">{service.name}</h2>
              <p className="leading-tight text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <img className="hidden md:flex" src={Man} alt="" />
    </section>
  );
}
