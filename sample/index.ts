import { container, SERVICES } from './container';
import { IUserService } from './services';

const service: IUserService = container.get(SERVICES.USER_SERVICE);
console.log(service.getName());