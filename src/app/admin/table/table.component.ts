import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-admin-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
    @Input() formModel: any;
    @Input() items: any;

    @Output() onRefresh: EventEmitter<boolean> = new EventEmitter();
    @Output() onEdit: EventEmitter<any> = new EventEmitter();
    @Output() onRemove: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    refreshTable() {

        this.onRefresh.emit(true)
    }

    editItem(item) {

        this.onEdit.emit(item)
    }

    removeItem(item) {

        this.onRemove.emit(item)
    }
}
