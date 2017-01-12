import {Component, OnInit, HostListener} from '@angular/core';
import {MdlService} from "./services/mdl.service";
import {SnackbarService} from "./components/snackbar/snackbar.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})

export class AppComponent implements OnInit {

    constructor(private ch: MdlService) {
    }

    ngOnInit() {
        setInterval(this.ch.updateDom, 200);
    }

    @HostListener('window:scroll', ['$event'])
    windowScroll(event: any) {
        // console.log(event);
    }
}
