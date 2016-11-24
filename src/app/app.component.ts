import {Component, OnInit, HostListener} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})

export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

    @HostListener('window:scroll', ['$event'])
    windowScroll(event: any) {
        // console.log(event);
    }
}
