import { AxiosInstance } from 'axios';

export abstract class AbstractBillingProvider {
  constructor(protected httpClient: AxiosInstance) {}
  abstract getComponents(): any;
}
