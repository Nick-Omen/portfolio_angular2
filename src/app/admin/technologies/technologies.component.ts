import {Component, OnInit} from '@angular/core';
import {Technology} from "./technology";
import {TechnologiesService} from "./technologies.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {WorkTypeService} from "../work-type.service";
import {WorkType} from "../work-type";

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.component.html',
    styleUrls: ['./technologies.component.sass']
})
export class TechnologiesComponent implements OnInit {
    technologies: Technology[];
    form: FormGroup;
    workTypes: WorkType[];
    addItem: boolean = false;
    technologyFormModel: Array<any> = [
        {
            name: 'Name',
            key: 'name',
            numeric: false
        },
        // {
        //     name: 'Work type',
        //     key: 'work_type',
        //     numeric: false
        // }
    ];

    constructor(private techService: TechnologiesService,
                private workTypesService: WorkTypeService,
                private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            id: '',
            name: [null, Validators.required],
            work_type: [null, Validators.required]
        })
    }

    ngOnInit() {

        this.loadTechnologies();
        this.workTypesService.get()
            .then(workTypes => {
                this.workTypes = workTypes;
            })
    }

    loadTechnologies(): void {
        this.techService.get()
            .then(technologies => {
                this.technologies = technologies;
                console.log(technologies);
            })
    }

    reloadTechnologies() {

        this.technologies.length = 0;
        this.loadTechnologies();
    }

    editTechnology(technology) {

        this.form.patchValue(technology);
        this.addItem = true;
    }

    removeTechnology(technology) {
        this.techService.del(technology.id)
            .then(res => {
                this.technologies = this.technologies.filter(t => t.id != res.id);

                if(this.form.value.id && this.form.value.id === technology.id) {

                    this.form.reset();
                    this.addItem = false;
                }
            })
    }

    triggerForm() {
        this.addItem = !this.addItem;

        if (!this.addItem) {
            this.form.reset();
        }
    }

    closeForm() {

        this.addItem = false;
        this.form.reset();
    }

    formSubmit(event) {
        event.preventDefault();

        if (this.form.value.id) {

            this.techService.modify(this.form.value)
                .then(technology => {
                    this.technologies = this.technologies.map(t => {
                        if(t.id === technology.id) {
                            return technology
                        }
                        return t;
                    });

                    this.closeForm();
                })
        } else {

            this.techService.add(this.form.value)
                .then(technology => {
                    this.technologies.push(technology);
                    this.form.reset()
                })
        }
    }
}
