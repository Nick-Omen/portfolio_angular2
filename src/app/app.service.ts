import {Injectable} from '@angular/core';

@Injectable()
export class AppService {
    apiUrl: string = 'http://localhost:3000';

    constructor() {
    }
}
