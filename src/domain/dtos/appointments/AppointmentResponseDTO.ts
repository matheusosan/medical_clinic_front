import { ClientResponseDTO } from "./../clients/ClientResponseDTO";
import { Speciality } from "./../specialities/SpecialityResponseDTO";

export interface Appointment {
  id: string;
  dataAgendada: string;
  speciality: Speciality;
  client: ClientResponseDTO;
  cancellationReason: string;
  status: string;
}
