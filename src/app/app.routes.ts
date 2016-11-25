import {HomeComponent} from "./home/home.component";

export const AppRoutes: Array<any> = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: '',
    }
];
