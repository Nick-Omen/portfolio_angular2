import {Component, OnInit, ElementRef} from '@angular/core';
import {SnackbarModel} from "./snackbar.model";
import {SnackbarService} from "./snackbar.service";

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html'
})
export class SnackbarComponent implements OnInit {

    snackbar: SnackbarModel;

    constructor(private snackbarService: SnackbarService,
                private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.snackbarService.snackbarData.subscribe(snackbar => {
            this.snackbar = snackbar;

            if(snackbar.message && snackbar.actionText) {

                this.elementRef.nativeElement
                    .querySelector('#snackbar')
                    .MaterialSnackbar
                    .showSnackbar(snackbar);
            }
        });
    }
}
