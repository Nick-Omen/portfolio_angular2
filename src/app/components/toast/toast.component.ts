import {Component, OnInit, ElementRef} from '@angular/core';
import {ToastModel} from "./toast.model";
import {ToastService} from "./toast.service";

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html'
})
export class ToastComponent implements OnInit {

    toast: ToastModel;

    constructor(private toastService: ToastService,
                private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.toastService.toastData.subscribe(toast => {
            this.toast = toast;

            if(toast.message) {

                this.elementRef.nativeElement
                    .querySelector('#toast')
                    .MaterialSnackbar
                    .showSnackbar(toast);
            }
        });
    }
}
