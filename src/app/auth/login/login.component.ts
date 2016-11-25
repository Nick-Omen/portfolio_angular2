import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private authService: AuthService,
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
                console.log(res.json())
            });
    }
}
