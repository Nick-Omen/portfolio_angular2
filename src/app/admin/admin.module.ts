import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {AdminRoutes} from "./admin.routes";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AdminComponent} from "./admin.component";
import {LanguagesComponent} from "./languages/languages.component";
import {AdminNavigationComponent} from "./admin-navigation/admin-navigation.component";
import {LanguagesService} from "./languages/languages.service";
import {PipesModule} from "../pipes/pipes.module";
import {StatisticsComponent} from "./statistics/statistics.component";
import {WorksComponent} from "./works/works.component";
import {TechnologiesComponent} from "./technologies/technologies.component";

@NgModule({
    declarations: [
        AdminComponent,
        LanguagesComponent,
        WorksComponent,
        TechnologiesComponent,
        AdminNavigationComponent,
        StatisticsComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forChild(AdminRoutes),
        PipesModule,
    ],
    providers: [
        LanguagesService,
    ],
})
export class AdminModule {
}
