import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
    form: FormGroup;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder,
                public router: Router) {
        this.form = formBuilder.group({
            username: ['', Validators.pattern('^[0-9a-zA-Z-_]{4,16}$')],
            email: ['', Validators.required],
            passwords: formBuilder.group({
                password: ['', [
                    Validators.required,
                    Validators.minLength(6)
                ]],
                rePassword: ['', [
                    Validators.required,
                    Validators.minLength(6)
                ]]
            })
        });
    }

    ngOnInit() {
    }

    adaptValue(formValue) {
        console.log(formValue);
        formValue.password = formValue.passwords.password;
        delete formValue.passwors;
        return formValue
    }

    formSubmit(event) {
        event.preventDefault();

        this.authService.signUp(this.adaptValue(this.form.value))
            .then(res => {
                this.router.navigate(['/authorization/login']);
            })
            .catch(res => {
                console.log(res.json())
            });
    }
}
