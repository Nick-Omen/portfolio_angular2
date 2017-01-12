import {Injectable} from '@angular/core';
import {SnackbarModel} from "./snackbar.model";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class SnackbarService {
    protected snackbarDefaults: SnackbarModel = {
        message: '',
        timeout: 2000,
        actionHandler: () => {},
        actionText: ''
    };
    snackbarData: BehaviorSubject<SnackbarModel> = new BehaviorSubject(this.snackbarDefaults);

    showSnackbar(data: SnackbarModel): void {

        this.snackbarData.next(data);
    }
}
