export interface BaseResponse {
  hasError: boolean,
  data: any,
  error: Error
}

interface Error {
  code: number,
  title: string,
  message: string
}
