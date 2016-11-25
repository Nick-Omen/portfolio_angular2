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
    rePassword: string = '';
    constructor(private authService: AuthService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_]{4,16}$')
            ]],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    rePasswordInput(event) {
        this.rePassword = event.currentTarget.value;
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
