export interface BaseResponse<T> {
  hasError: boolean,
  data: T,
  error: Error
}

interface Error {
  code: number,
  title: string,
  message: string
}
