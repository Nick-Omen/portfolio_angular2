import {Injectable} from '@angular/core';
import {ToastModel} from "./toast.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ToastService {
    protected toastDefaults: ToastModel = {
        message: ''
    };
    toastData: BehaviorSubject<ToastModel> = new BehaviorSubject(this.toastDefaults);

    showToast(data: ToastModel): void {

        this.toastData.next(data);
    }
}
