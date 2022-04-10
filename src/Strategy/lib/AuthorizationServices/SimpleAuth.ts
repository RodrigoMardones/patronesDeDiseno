import  AuthorizarionService  from "./AuthorizationService";

export default class SimpleAuthService implements AuthorizarionService{

  constructor(public dni: string ) {}
  authorize(): string {
    return `this user with dni : ${this.dni} is authorized with Simple Authentication`;
  }
}