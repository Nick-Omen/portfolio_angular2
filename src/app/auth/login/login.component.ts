import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AppService} from "../../app.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    formError: string;

    constructor(private globals: AppService,
                private authService: AuthService,
                private formBuilder: FormBuilder,
                private router: Router) {
        this.form = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    formSubmit(event) {
        event.preventDefault();

        this.authService.logIn(this.form.value)
            .then(isLogin => {
                if (isLogin) {
                    this.router.navigate(['/']);
                }
            })
            .catch(res => {
                res = res.json();
                if (res.message) {

                    this.formError = res.message;
                    this.form.patchValue({
                        password: ''
                    });
                    const timeout = setTimeout(() => this.formError = '', this.globals.errorMessageTimeout);
                    this.form.valueChanges.subscribe(() => {
                        clearTimeout(timeout);
                        this.formError = '';
                    });
                } else {
                    console.log(res);
                }
            });
    }
}
