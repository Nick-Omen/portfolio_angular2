import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {Location} from '@angular/common';
import {ToastService} from "../../components/toast/toast.service";

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

    constructor(private authService: AuthService,
                private router: Router,
                private toastService: ToastService,
                private location: Location) {
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);

        this.toastService.showToast({
            message: "You've successfully logged out.",
            timeout: 10000
        })
    }

    goBack() {
        this.location.back();
    }
}
