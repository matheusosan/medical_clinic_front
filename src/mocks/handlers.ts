import { http, HttpResponse } from "msw";
import { cpfNotFound, user, validCpf } from "./responses/clientByCpfResponse";
import {
  profileAppointmentsResponse,
  profileResponse,
} from "./responses/profileResponse";
import { specialitiesResponse } from "./responses/specialitiesResponse";

export const handlers = [
  http.get("http://localhost:8080/service", () => {
    return HttpResponse.json(specialitiesResponse);
  }),

  http.get("http://localhost:8080/client/cpf/:id", ({ params }) => {
    const { id } = params;

    if (id !== validCpf) {
      return HttpResponse.json(cpfNotFound, { status: 404 });
    }

    return HttpResponse.json(user, { status: 200 });
  }),

  http.get("http://localhost:8080/appointment/date", ({ request }) => {
    const url = new URL(request.url);
    const date = url.searchParams.get("date");
    const serviceId = url.searchParams.get("serviceId");

    return HttpResponse.json([
      {
        dataAgendada: date,
        serviceId,
      },
    ]);
  }),

  http.post("http://localhost:8080/client", () => {
    return HttpResponse.json({
      response: "Paciente cadastrado com sucesso!",
      statusCode: "201",
    });
  }),

  http.post("http://localhost:8080/appointment", () => {
    return HttpResponse.json({
      response: "Consulta agendada com sucesso!",
      status: "201",
    });
  }),

  http.get("http://localhost:8080/client/profile", () => {
    return HttpResponse.json(profileResponse);
  }),

  http.get(`http://localhost:8080/appointment/client/1`, ({ request }) => {
    const url = new URL(request.url);
    const sortBy = url.searchParams.get("sortBy");
    if (sortBy === "newest") {
      const sortedResponse = profileAppointmentsResponse.sort((a, b) => {
        return a.service.name.localeCompare(b.service.name);
      });
      return HttpResponse.json(sortedResponse);
    }

    return HttpResponse.json(profileAppointmentsResponse);
  }),
];
