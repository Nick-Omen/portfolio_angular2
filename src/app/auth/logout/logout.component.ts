import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router,
                private location: Location) {
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }

    goBack() {
        this.location.back();
    }
}
