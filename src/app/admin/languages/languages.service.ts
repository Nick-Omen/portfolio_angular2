import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {AppService} from "../../app.service";
import "rxjs/add/operator/toPromise";
import {BaseService} from "../base.service";
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class LanguagesService extends BaseService {

    constructor(public globals: AppService,
                public http: Http,
                public authService: AuthService) {
        super(globals, http, authService);
        this.url = 'languages';
    }
}
