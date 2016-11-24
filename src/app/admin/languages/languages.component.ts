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
    editItem: number = 0;
    addItem: boolean = false;

    constructor(private languagesService: LanguagesService,
                private globals: AppService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
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

        this.loadLanguages()
            .then(languages => {
                if (this.editItem) {
                    this.form.patchValue(this.getLanguageValue(languages.filter(l => l.id === this.editItem)[0]));
                }
            });
    }

    loadLanguages(): Promise<Language[]> {

        return new Promise(resolve => {
            this.languagesService.getLanguages()
                .then(languages => {
                    this.languages = languages;
                    resolve(languages);
                })
        });
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

    addLanguage(event): void {
        console.log(this.editItem, this.form.value);
        event.preventDefault();

        this.languagesService.addLanguage(this.form.value)
            .then(res => {
                this.languages.push(Object.assign({}, {id: res.id}, this.form.value));
                this.form.reset();
            })
    }

    modifyLanguage(event): void {
        console.log(this.editItem, this.form.value);
        event.preventDefault();

        this.languagesService.modifyLanguage(this.editItem, this.form.value)
            .then(res => {
                this.languages = this.languages.map(l => {
                    if (l.id === res.id) {
                        return res;
                    }
                    return l;
                });
                this.form.reset();
                this.editItem = 0;
                this.addItem = false;
            })
    }

    removeLanguage(id) {

        this.languagesService.removeLanguage(id)
            .then(res => {
                this.languages = this.languages.filter(l => l.id != res.id)
            })
    }

    getLanguageValue(language: Language) {

        const expDate = new Date(language.experience);
        const experience = ('0' + expDate.getMonth() + 1).slice(-2) + '-'
            + ('0' + (expDate.getDate())).slice(-2) + '-'
            + expDate.getFullYear();

        return Object.assign(language, {experience: experience});

    }

    editLanguage(language, languageId) {

        this.editItem = languageId;
        this.addItem = true;

        this.form.patchValue(this.getLanguageValue(language));
    }
}
