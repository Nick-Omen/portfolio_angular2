import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "./languages.service";
import {Language} from "./language";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AppService} from "../../app.service";

@Component({
    selector: 'app-admin-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.sass']
})
export class LanguagesComponent implements OnInit {

    languages: Language[] = [];
    form: FormGroup;
    addItem: boolean = false;
    languageFormModel: Array<any> = [
        {
            name: 'Name',
            key: 'name',
            numeric: false
        },
        {
            name: 'Skill level',
            key: 'skill_level',
            numeric: true
        },
        {
            name: 'Experience',
            key: 'experience',
            numeric: true
        }
    ];

    constructor(private languagesService: LanguagesService,
                private globals: AppService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            id: '',
            name: [null, Validators.required],
            skill_level: [null, Validators.required],
            experience: [null, [
                Validators.required,
                Validators.pattern(globals.dateValidation)
            ]]
        });
    }

    ngOnInit(): void {

        this.loadLanguages();
    }

    reloadLanguages(): void {

        this.languages.length = 0;
        this.loadLanguages();
    }

    loadLanguages() {

        this.languagesService.getLanguages()
            .then(languages => this.languages = languages.map(l => this.getLanguageValue(l)))
    }

    triggerForm(): void {
        this.addItem = !this.addItem;

        if (!this.addItem) {
            this.form.reset();
        }
    }

    closeForm(): void {
        this.addItem = false;
        this.form.reset();
    }

    formSubmit(event): void {
        event.preventDefault();

        if(this.form.value.id) {

            this.languagesService.modifyLanguage(this.form.value)
                .then(language => {
                    this.languages = this.languages.map(l => {
                        if(l.id === language.id) {
                            return language
                        }
                        return l;
                    });

                    this.closeForm();
                })
        } else {

            this.languagesService.addLanguage(this.form.value)
                .then(language => {
                    this.languages.push(language);
                    this.form.reset();
                })
        }
    }

    private getLanguageValue(language: Language) {

        const expDate = new Date(language.experience);
        const experience = ('0' + expDate.getMonth() + 1).slice(-2) + '-'
            + ('0' + (expDate.getDate())).slice(-2) + '-'
            + expDate.getFullYear();

        return Object.assign(language, {experience: experience});
    }

    editLanguage(language) {

        this.form.patchValue(language);
        this.addItem = true;
    }

    removeLanguage(language) {

        this.languagesService.removeLanguage(language.id)
            .then(res => {
                this.languages = this.languages.filter(l => l.id != res.id);

                if(this.form.value.id && this.form.value.id === language.id) {

                    this.form.reset();
                    this.addItem = false;
                }
            })
    }
}
