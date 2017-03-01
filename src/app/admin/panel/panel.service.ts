import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
@Injectable()
export class PanelService {
    _panelOpened: boolean = false;
    panelOpened: BehaviorSubject<boolean> = new BehaviorSubject(this._panelOpened);

    open(): void {
        this._panelOpened = true;
        this.panelOpened.next(this._panelOpened);
    }

    close(): void {
        this._panelOpened = false;
        this.panelOpened.next(this._panelOpened);
    }

    toggle(): void {
        this._panelOpened = !this._panelOpened;
        this.panelOpened.next(this._panelOpened);
    }
}
