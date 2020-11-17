import { HttpService, UserService } from './services';
import { Container } from '../src/container';

export enum SERVICES {
    HTTP_SERVICE,
    USER_SERVICE
}

export const container = new Container();

container.set(SERVICES.HTTP_SERVICE, HttpService)
container.set(SERVICES.USER_SERVICE, UserService);
