import { Link } from "react-router-dom";
import Header from "../components/Header";
import { ChangeEvent, useEffect, useState } from "react";
import { getAllUsers } from "../services/specialities.service";

interface Service {
  id: number;
  name: string;
  price: number;
}

export default function Agendamento() {
  const [data, setData] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setData(data);
      } catch (error) {
        throw new Error("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    const service = data.find((service) => service.id === Number(selectedId));
    setSelectedService(service);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen h-auto w-full py-8 gap-4 mt-24">
        <h2 className="font-extrabold text-4xl px-[15%] w-full text-left">
          Agende sua <span className="text-[#0B4FFF]">consulta</span>
        </h2>

        <div className="flex justify-evenly mt-8 w-[1670px] h-[630px] border border-[#D9D9D9]">
          <div className="flex flex-col flex-1 px-60 py-12 gap-10 border-r">
            <div className="gap-5">
              <h2 className="font-bold text-xl">Informe seu CPF</h2>
              <input
                type="text"
                name=""
                id=""
                placeholder="___.___.__-__"
                className="w-auto"
              />
            </div>
            <div className="gap-5">
              <h2 className="font-bold text-xl">Nome</h2>
              <p>John Doe</p>
            </div>
            <div className="gap-5">
              <h2 className="font-bold text-xl">Data de Nascimento</h2>
              <p>01/01/2001</p>
            </div>
            <div className="gap-5">
              <h2 className="font-bold text-xl">Telefone</h2>
              <p>(99)999999999</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 px-60 py-12 gap-10">
            <div className="gap-5">
              <h2 className="font-bold text-xl">
                Selecione a especialidade desejada
              </h2>
              <select onChange={handleSelectChange} className="w-64">
                {data.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="gap-5">
              <h2 className="font-bold text-xl">Valor da Consulta</h2>
              <p>{selectedService ? selectedService.price : "R$00,00"}</p>
            </div>
            <div className="gap-5">
              <h2 className="font-bold text-xl">Selecione uma data</h2>
              <input type="date" name="" id="" />
            </div>
            <div className="gap-5">
              <h2 className="font-bold text-xl">Selecione um horário</h2>
              <input type="date" name="" id="" />
            </div>
          </div>
        </div>
        <div className="flex w-[1670px] justify-between">
          <Link
            to={"/"}
            className="px-12 py-4 font-bold  bg-[#F35555] text-white"
          >
            CANCELAR
          </Link>
          <button className="px-12 py-4 font-bold bg-[#42DA5B] text-white">
            AGENDAR
          </button>
          <button onClick={() => console.log(selectedService)}>LOG</button>
        </div>
      </main>
    </>
  );
}
