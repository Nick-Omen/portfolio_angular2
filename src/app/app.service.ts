import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable()
export class AppService {
    apiUrl: string = environment.apiServerUrl;

    constructor() {
    }
}
