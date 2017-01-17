import {HomeComponent} from "./home/home.component";

export const AppRoutes: any[] = [
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule'
    },
    {
        path: 'authorization',
        loadChildren: 'app/auth/auth.module#AuthModule'
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '',
    }
];
