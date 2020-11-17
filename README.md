# Dependency injection in TypeScript simple impl.


See: [basic example](https://github.com/webstyle/ts-di-ioc/blob/master/examples)

```ts
import { Container } from './src/container';

// Service interface
interface IHttpService {
    makeRequest(): string;
}

// Service implementation
class HttpService implements IHttpService {
    makeRequest() {
        return 'this is method will send awesome request'
    }
}

// Container creating
export const container = new Container();
// Put service to the container
// the first argument is service identifier and the second argument is service
container.set('HTTP_SERVICE', HttpService)

// Final, dependecy injection!
const service: IHttpService = container.get(HTTP_SERVICE);
console.log(service.makeName());
```

Any PR's are welcome!