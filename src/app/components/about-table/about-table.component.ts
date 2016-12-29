import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about-table',
    templateUrl: './about-table.component.html',
    styleUrls: ['./about-table.component.sass']
})
export class AboutTableComponent implements OnInit {

    age: number;

    constructor() {
        this.age = new Date().getFullYear() - 1995;
    }

    ngOnInit() {
    }

}
