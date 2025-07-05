export interface ApiResponseDto<T> {
  data: T;
  message: string;
  statusCode: number;
}
