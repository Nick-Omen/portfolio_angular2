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
import {CanActivateViaAuthGuard} from "../services/can-activate-via-auth-guard.service";
import {AuthService} from "../auth/auth.service";
import {TableComponent} from './table/table.component';
import {WorksService} from "./works/works.service";
import {TechnologiesService} from "./technologies/technologies.service";
import {WorkTypeService} from "./work-type.service";
import {AuthModule} from "../auth/auth.module";
import {ImageUploadComponent} from "./image-upload/image-upload.component";
import {PanelComponent} from "./panel/panel.component";
import {PanelService} from "./panel/panel.service";

@NgModule({
    declarations: [
        AdminComponent,
        LanguagesComponent,
        WorksComponent,
        TechnologiesComponent,
        AdminNavigationComponent,
        StatisticsComponent,
        TableComponent,
        PanelComponent,
        ImageUploadComponent,
    ],
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forChild(AdminRoutes),
        PipesModule,
        AuthModule,
    ],
    exports: [
        AdminNavigationComponent,
    ],
    providers: [
        CanActivateViaAuthGuard,
        AuthService,
        LanguagesService,
        WorksService,
        TechnologiesService,
        WorkTypeService,
        PanelService,
    ],
})
export class AdminModule {
}
