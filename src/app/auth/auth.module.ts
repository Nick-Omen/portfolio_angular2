import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {AuthService} from "./auth.service";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    exports: [AuthComponent],
    providers: [AuthService]
})
export class AuthModule {
}
