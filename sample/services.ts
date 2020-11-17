import { container, SERVICES } from './container';


export interface IHttpService {
    getRequest(): string;
}

export class HttpService implements IHttpService {
    getRequest() {
        return 'this is awesome request'
    }
}

export interface IUserService {
    getName(): string;
}

export class UserService implements IUserService {
    http: IHttpService = container.get(SERVICES.HTTP_SERVICE)
    getName() {
        console.log(this.http.getRequest());
        return 'this method will return user name'
    }
}