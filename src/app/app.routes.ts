import {HomeComponent} from "./home/home.component";

export const AppRoutes: Array<any> = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: 'about',
        component: HomeComponent,
        data: {}
    }];
