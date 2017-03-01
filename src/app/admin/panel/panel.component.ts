import {Component} from '@angular/core';
import {PanelService} from "./panel.service";

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.sass']
})
export class PanelComponent {
    panelOpened: boolean = false;

    constructor(private panelService: PanelService) {
        panelService.panelOpened.subscribe(panelOpened => this.panelOpened = panelOpened)
    }

    panelHandler(): void {
        this.panelService.toggle();
    }
}
