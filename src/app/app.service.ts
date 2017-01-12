import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';

@Injectable()
export class AppService {
    apiUrl: string = environment.apiServerUrl;
    dateValidation: string = `^((0|)[1-9]|[12][0-9]|3[01])-((0|)[1-9]|1[012])-20[12][0-9]$`;

    errorMessageTimeout: number = 30000;
    snackbarTimeout: number = 30000;
}
