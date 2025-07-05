import { ApiResponseDto } from "./../../../domain/dtos/ApiResponseDto";
import { Speciality } from "./../../../domain/dtos/specialities/SpecialityResponseDTO";

export const getAllServices = async (): Promise<
  ApiResponseDto<Speciality[]>
> => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}service`);
  const data = await res.json();

  return data;
};
