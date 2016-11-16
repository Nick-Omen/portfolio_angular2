import {Component, EventEmitter, trigger, state, style, transition, animate} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-chip',
    templateUrl: './chip.component.html',
    styleUrls: ['./chip.component.css'],
    animations: [
        trigger('chipState', [
            state('in', style({
                transform: 'scale(1)',
            })),
            transition('void => in', [
                style({transform: 'scale(0)'}),
                animate('180ms ease-in')
            ]),
            transition('in => void', [
                style({transform: 'scale(0)'}),
                animate('180ms ease-out')
            ]),
        ]),
    ],
})
export class ChipComponent {

    @Input() isActive: boolean = false;
    @Input() isDisabled: boolean = false;
    @Input() isContact: boolean = true;
    @Input() name: string;
    @Input() chipState: string = 'in';
    @Output() stateChange: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    toggleTechnology(event) {

        event.stopPropagation();

        const tech = event.currentTarget.getAttribute('data-tech');

        this.stateChange.emit({type: this.isActive ? 'remove' : 'add', tech: tech});
    }
}
