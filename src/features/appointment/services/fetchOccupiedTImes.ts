import { ApiResponseDto } from "./../../../domain/dtos/ApiResponseDto";
import { AppointmentByDateAndIdResponseDTO } from "./../../../domain/dtos/appointments/AppointmentByDateAndIdResponseDTO";

export const fetchOccupiedTimes = async (
  dateInput: string,
  specialityInput: string
): Promise<ApiResponseDto<AppointmentByDateAndIdResponseDTO[]>> => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }appointment/date?date=${dateInput}&specialityId=${specialityInput}`
  );
  const data = await response.json();
  return data;

};
