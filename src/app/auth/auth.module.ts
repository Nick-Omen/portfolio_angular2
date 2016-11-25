import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {AuthService} from "./auth.service";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {SignupComponent} from "./signup/signup.component";
import {RouterModule} from "@angular/router";
import {AuthRoutes} from "./auth.routes";

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        LogoutComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forChild(AuthRoutes),
    ],
    exports: [
        AuthComponent,
        LogoutComponent,
    ],
    providers: [AuthService]
})
export class AuthModule {
}
