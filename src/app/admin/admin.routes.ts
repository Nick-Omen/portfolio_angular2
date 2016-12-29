import {LanguagesComponent} from "./languages/languages.component";
import {AdminComponent} from "./admin.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {WorksComponent} from "./works/works.component";
import {TechnologiesComponent} from "./technologies/technologies.component";
import {CanActivateViaAuthGuard} from "../services/can-activate-via-auth-guard.service";

export const AdminRoutes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [
            CanActivateViaAuthGuard
        ],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'statistic'
            },
            {
                path: 'statistic',
                component: StatisticsComponent
            },
            {
                path: 'languages',
                component: LanguagesComponent
            },
            {
                path: 'works',
                component: WorksComponent
            },
            {
                path: 'technologies',
                component: TechnologiesComponent
            }
        ]
    },
];
