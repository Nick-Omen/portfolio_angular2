import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router, NavigationEnd} from "@angular/router";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {

    isAuthenticated: boolean;
    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.isAuthenticated
            .subscribe((isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated)
    }
}
