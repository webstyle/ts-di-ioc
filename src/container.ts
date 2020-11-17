import { ServiceIdentifier } from './types/service.id';
import { ServiceScopes } from './types/scopes';
export class Container {
    services: Map<ServiceIdentifier, any> = new Map();

    get(identifier: ServiceIdentifier) {
        if (!this.services.has(identifier)) {
            throw new Error('service not found')
        };

        const service = this.services.get(identifier);
        if (service.scope === ServiceScopes.SINGLETON) {
            return service.instance;
        }

        return new service.handler();
    }

    set(identifier: ServiceIdentifier, handler: any, scope: ServiceScopes = ServiceScopes.SINGLETON) {
        let instance = null;
        if (scope === ServiceScopes.SINGLETON) {
            instance = new handler();
        }
        this.services.set(identifier, { handler, scope, instance });
    }
}
