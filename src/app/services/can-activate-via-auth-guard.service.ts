import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(): boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/authorization/login']);
        return false;
    }
}