import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../../app.service";
import "rxjs/add/operator/toPromise";

@Injectable()
export class WorksService {

    url: string = 'works';

    constructor(private globals: AppService,
                private http: Http) {
    }

}
