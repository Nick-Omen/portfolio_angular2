import {Component, OnInit} from '@angular/core';
import {Language} from "../../admin/languages/language";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.sass']
})
export class SkillComponent implements OnInit {
    @Input() skill: Language;
    constructor() {
    }

    ngOnInit() {
    }

}
