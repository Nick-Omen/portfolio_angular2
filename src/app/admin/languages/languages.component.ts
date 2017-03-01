import {Component, OnInit} from '@angular/core';
import {LanguagesService} from "./languages.service";
import {Language} from "./language";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AppService} from "../../app.service";
import {PanelService} from "../panel/panel.service";
import {SnackbarService} from "../../components/snackbar/snackbar.service";
import {ToastService} from "../../components/toast/toast.service";

@Component({
    selector: 'app-admin-languages',
    templateUrl: './languages.component.html',
    styleUrls: ['./languages.component.sass']
})
export class LanguagesComponent implements OnInit {

    languages: Language[] = [];
    form: FormGroup;
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
    lastState: {method: string, data: any};

    constructor(private languagesService: LanguagesService,
                private globals: AppService,
                private panelService: PanelService,
                private snackbarService: SnackbarService,
                private toastService: ToastService,
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

        this.languagesService.get()
            .then(languages => this.languages = languages.map(l => this.getLanguageValue(l)))
    }

    formSubmit(event): void {
        event.preventDefault();

        if (this.form.value.id) {

            this.lastState = {
                method: 'put',
                data: this.languages.filter(l => l.id == this.form.value.id)[0]
            };

            this.modifyLanguage(this.form.value, true);
        } else {

            this.addLanguage(this.form.value);
        }
    }

    addLanguage(formData: Language) {
        this.languagesService.add(formData)
            .then(language => {
                this.lastState = {
                    method: "add",
                    data: language
                };

                this.languages.push(language);

                this.form.reset();
                this.closePanel();

                this.snackbarService.showSnackbar({
                    timeout: 3000,
                    message: `You've added the ${language.name} language.`,
                    actionText: 'remove',
                    actionHandler: this.undoActions.bind(this, language)
                });
            });
    }

    modifyLanguage(formData: Language, canUndo: boolean = false) {
        this.languagesService.modify(formData)
            .then(language => {
                this.languages = this.languages.map(l => {
                    if (l.id === language.id) {
                        return language
                    }
                    return l;
                });

                this.closePanel();
                if (canUndo) {

                    this.snackbarService.showSnackbar({
                        timeout: 3000,
                        message: `You've edited the ${language.name} language.`,
                        actionText: 'Undo',
                        actionHandler: this.undoActions.bind(this, language)
                    });
                } else {

                    this.toastService.showToast({
                        timeout: 3000,
                        message: `You've edited the ${language.name} language.`
                    })
                }
            });
    }

    undoActions(language: Language) {

        switch (this.lastState.method) {
            case "add":
                this.removeLanguage(language, false);
                break;

            case "put":
                let changes = {};
                for (let key in language) {
                    if (this.lastState.data.hasOwnProperty(key) && language[key] != this.lastState.data[key]) {
                        changes[key] = this.lastState.data[key]
                    }
                }
                this.modifyLanguage(Object.assign({}, language, changes));
                break;

            case "del":
                delete language.id;
                this.addLanguage(language);
                break;

            default:
                break;
        }

        this.lastState.method = "";
        this.lastState.data = false;
    }

    private getLanguageValue(language: Language) {

        const expDate = new Date(language.experience);
        const experience = ('0' + expDate.getMonth() + 1).slice(-2) + '-'
            + ('0' + (expDate.getDate())).slice(-2) + '-'
            + expDate.getFullYear();

        return Object.assign(language, {experience: experience});
    }

    editLanguage(language: Language) {

        this.form.patchValue(language);
        this.panelService.open();
    }

    closePanel() {
        this.form.reset();
        this.panelService.close();
    }

    removeLanguage(language: Language, canUndo: boolean = true) {

        this.lastState = {
            method: "del",
            data: language
        };

        this.languagesService.del(language.id)
            .then(res => {
                this.languages = this.languages.filter(l => l.id != res.id);

                if (this.form.value.id && this.form.value.id === language.id) {
                    this.closePanel();
                }

                if (canUndo) {

                    this.snackbarService.showSnackbar({
                        timeout: 3000,
                        message: `You've removed the ${language.name} language.`,
                        actionText: 'Undo',
                        actionHandler: this.undoActions.bind(this, language)
                    });
                } else {

                    this.toastService.showToast({
                        timeout: 3000,
                        message: `You've removed the ${language.name} language.`
                    });
                }
            })
    }
}
