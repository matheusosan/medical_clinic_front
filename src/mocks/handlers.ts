import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:8080/service", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Dermatologia",
        price: 99.9,
      },
      {
        id: 2,
        name: "Odontologia",
        price: 109.9,
      },
    ]);
  }),

  http.get("http://localhost:8080/client/cpf/1234567891011", () => {
    return HttpResponse.json({
      id: 1,
      name: "Matheus",
    });
  }),

  http.post("http://localhost:8080/client", () => {
    return HttpResponse.json({
      name: "teste1",
      birthDate: "2000-01-01",
      cpf: "99999999999",
      phoneNumber: "51999999999",
      email: "mail@mail.com",
    });
  }),
];
