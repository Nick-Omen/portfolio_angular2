import {Component, OnInit} from '@angular/core';
import {Language} from "../../admin/languages/language";
import {LanguagesService} from "../../admin/languages/languages.service";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
    languages: Language[];

    constructor(private languageService: LanguagesService) {
    }

    ngOnInit() {
        this.languageService.getLanguages()
            .then(languages => this.languages = languages)
    }
}
