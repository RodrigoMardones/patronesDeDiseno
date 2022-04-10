import AuthorizationStrategy from "./lib/AuthorizationStrategy";
import { SecondFactorAuthService, SimpleAuthService } from "./lib/AuthorizationServices";

export default function main(){
  const dni: string = '11.111.111-1';
  const authorizationStrategy = new AuthorizationStrategy(new SecondFactorAuthService(dni));
  console.log(authorizationStrategy.execute());
  authorizationStrategy.setAuthorizationService(new SimpleAuthService(dni));
  console.log(authorizationStrategy.execute());
}