import {NgModule} from '@angular/core';
import {ExperiencePipe} from "./experience.pipe";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [
        ExperiencePipe,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ExperiencePipe,
    ],
})

export class PipesModule {
}
