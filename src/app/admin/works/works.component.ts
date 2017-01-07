import {Component, OnInit} from '@angular/core';
import {Work} from "./work";
import {WorksService} from "./works.service";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {WorkType} from "../work-type";
import {WorkTypeService} from "../work-type.service";
import {Technology} from "../technologies/technology";
import {TechnologiesService} from "../technologies/technologies.service";
import {Language} from "../languages/language";
import {LanguagesService} from "../languages/languages.service";

@Component({
    selector: 'app-works',
    templateUrl: './works.component.html',
    styleUrls: ['./works.component.sass']
})
export class WorksComponent implements OnInit {
    works: Work[];
    form: FormGroup;
    workTypes: WorkType[];
    technologies: Technology[];
    languages: Language[];
    addItem: boolean = false;
    workFormModel: Array<any> = [
        {
            name: 'Title',
            key: 'title',
            numeric: false
        },
        {
            name: 'Description',
            key: 'description',
            numeric: false
        },
        {
            name: 'Short description',
            key: 'short_description',
            numeric: false
        }
    ];

    constructor(private worksService: WorksService,
                private workTypesService: WorkTypeService,
                private techService: TechnologiesService,
                private langService: LanguagesService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            id: '',
            title: [null, Validators.required],
            description: [null, Validators.required],
            short_description: [null, Validators.required],
            url: [null, Validators.required],
            work_types: [null, Validators.required],
            languages: [null, Validators.required],
            technologies: [null, Validators.required]
        })
    }

    ngOnInit() {

        this.loadWorks();

        this.workTypesService.get()
            .then((workTypes: WorkType[]) => this.workTypes = workTypes);
        this.techService.get()
            .then((technologies: Technology[]) => this.technologies = technologies);
        this.langService.get()
            .then((languages: Language[]) => this.languages = languages);
    }

    loadWorks() {
        this.worksService.get()
            .then((works: Work[]) => this.works = works)
    }

    triggerForm() {
        this.addItem = !this.addItem;

        if (!this.addItem) {
            this.form.reset();
        }
    }

    reloadWorks() {

        this.works.length = 0;
        this.loadWorks();
    }

    closeForm() {

        this.addItem = false;
        this.form.reset();
    }

    editWork(work: Work) {

        this.form.patchValue(work);
        this.addItem = true;
    }

    removeWork(work: Work) {

        this.worksService.del(work.id)
            .then(res => {
                this.works = this.works.filter(w => w.id != res.id);

                if(this.form.value.id && this.form.value.id === work.id) {

                    this.form.reset();
                    this.addItem = false;
                }
            })
    }

    formSubmit(event) {
        event.preventDefault();

        if (this.form.value.id) {

            this.worksService.modify(this.form.value)
                .then(work => {
                    this.works = this.works.map(w => {
                        if(w.id === work.id) {
                            return work
                        }
                        return w;
                    });

                    this.closeForm();
                })
        } else {

            this.worksService.add(this.form.value)
                .then(work => {
                    this.works.push(work);
                    this.form.reset();
                })
        }
    }
}
