import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

    form: FormGroup;
    formTab: string = 'signup';

    constructor(private authService: AuthService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit() {
    }

    formSubmit(event) {
        event.preventDefault();

        switch(this.formTab) {
            case 'signup':
                this.authService.signUp(this.form.value)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(res => {
                        console.log(res.json())
                    });
                break;
            case 'signin':
                this.authService.signIn(this.form.value)
                    .then(res => {
                        console.log(res);
                    })
                    .catch(res => {
                        console.log(res.json())
                    });
                break;
        }
    }

    changeTab(tab: string): void {
        this.formTab = tab;
    }
}
