export interface BaseResponse {
  hasError: boolean,
  data: any,
  errors: Error[]
}

interface Error {
  code: number,
  tittle: string,
  message: string
}
