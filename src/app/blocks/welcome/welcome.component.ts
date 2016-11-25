import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.sass'],
})
export class WelcomeComponent implements OnInit {

    protected menuHeight: number = 80 + 48;
    sectionHeight: string = 'auto';

    constructor() {
        this.sectionHeight = (window.innerHeight - this.menuHeight) + 'px';
    }

    onWindowResize() {
        this.sectionHeight = (window.innerHeight - this.menuHeight) + 'px';
    }

    ngOnInit() {
    }

}
