import { AuthorizarionService } from "../AuthorizationServices";

export default class AuthorizationStrategy {
  constructor( private authorization : AuthorizarionService ) {}
  setAuthorizationService(newService: AuthorizarionService) : AuthorizationStrategy {
    this.authorization = newService;
    return this;
  }
  execute() : string {
    return this.authorization.authorize();
  }
}