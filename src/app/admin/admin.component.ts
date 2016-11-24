import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }
}
