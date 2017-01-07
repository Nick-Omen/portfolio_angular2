import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../../app.service";
import "rxjs/add/operator/toPromise";
import {BaseService} from "../base.service";
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";
import {Technology} from "./technology";

@Injectable()
export class TechnologiesService extends BaseService {

    constructor(public globals: AppService,
                public http: Http,
                public authService: AuthService,
                public router: Router) {
        super(globals, http, authService, router);
        this.url = 'technologies';
    }
}
