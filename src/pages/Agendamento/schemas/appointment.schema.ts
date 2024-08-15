import { z } from "zod";

export const appointmentSchema = z.object({
  speciality: z.string().refine((value) => value !== "default", {
    message: "Selecione uma opção válida",
  }),
  selectedDate: z.string().date("Selecione uma data para consulta"),
  time: z.string().refine((value) => value !== "", {
    message: "Selecione um horário",
  }),
});

export type AppointmentSchema = z.infer<typeof appointmentSchema>;
