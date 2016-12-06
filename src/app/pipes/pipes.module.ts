import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ExperiencePipe} from "./experience.pipe";
import {AscDescPipe} from "./asc-desc.pipe";

@NgModule({
    declarations: [
        ExperiencePipe,
        AscDescPipe,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ExperiencePipe,
        AscDescPipe,
    ],
})

export class PipesModule {
}
