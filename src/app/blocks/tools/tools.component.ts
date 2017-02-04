import {Component, OnInit} from '@angular/core';
import {Technology} from "../../admin/technologies/technology";
import {TechnologiesService} from "../../admin/technologies/technologies.service";

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.sass']
})
export class ToolsComponent implements OnInit {

    tools: Technology[];
    binding = {
        'name': 'title',
        'image': 'image',
        'work_type_name': 'short_description'
    };

    constructor(private techService: TechnologiesService) {
    }

    ngOnInit() {
        this.techService.get()
            .then(technologies => this.tools = technologies);
    }
}
