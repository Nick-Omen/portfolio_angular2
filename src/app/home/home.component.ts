import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
:host {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
}`],
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
