import { NoParamEndpointConstructor } from 'interfaces/endpoints.interfaces';

const base = '/example' as const;

interface Endpoints {
  endpoint: NoParamEndpointConstructor;
}

export const exampleEndpoints: Endpoints = {
  endpoint: () => `${base}`,
};
