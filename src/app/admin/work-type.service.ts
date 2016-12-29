import {Injectable} from '@angular/core';
import {AppService} from "../app.service";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";
import {BaseService} from "./base.service";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class WorkTypeService extends BaseService {

    constructor(public globals: AppService,
                public http: Http,
                public authService: AuthService) {
        super(globals, http, authService);
        this.url = 'work-types';
    }
}
