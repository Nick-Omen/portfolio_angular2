import {Injectable} from '@angular/core';
import {AppService} from "../app.service";
import {Http} from "@angular/http";

import "rxjs/add/operator/toPromise";
import {BaseService} from "./base.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class WorkTypeService extends BaseService {

    constructor(public globals: AppService,
                public http: Http,
                public authService: AuthService,
                public router: Router) {
        super(globals, http, authService, router);
        this.url = 'work-types';
    }
}
