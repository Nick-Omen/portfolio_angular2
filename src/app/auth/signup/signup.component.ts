import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
    form: FormGroup;

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder) {
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

    formSubmit(event) {
        event.preventDefault();

        this.authService.signUp(this.form.value)
            .then(res => {
                console.log(res);
            })
            .catch(res => {
                console.log(res.json())
            });
    }
}
