import {LanguagesComponent} from "./languages/languages.component";
import {AdminComponent} from "./admin.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {WorksComponent} from "./works/works.component";
import {TechnologiesComponent} from "./technologies/technologies.component";

export const AdminRoutes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
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
