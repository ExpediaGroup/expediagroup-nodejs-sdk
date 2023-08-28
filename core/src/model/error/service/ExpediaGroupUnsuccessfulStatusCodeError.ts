import { ExpediaGroupServiceError } from "./ExpediaGroupServiceError";

export class ExpediaGroupUnsuccessfulStatusCodeError extends ExpediaGroupServiceError {
  constructor(readonly statusCode: number, readonly errorObject: any) {
    super();
  }
}
