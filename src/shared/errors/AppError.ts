/** @format */

class AppError {
  private _message: string
  private _statusCode: number

  constructor(message: string, statusCode = 400) {
    this._message = message
    this._statusCode = statusCode
  }

  public get message(): string {
    return this._message
  }

  public set message(message: string) {
    this._message = message
  }

  public get statusCode(): number {
    return this._statusCode
  }

  public set statusCode(statusCode: number) {
    this._statusCode = statusCode
  }
}

export default AppError
