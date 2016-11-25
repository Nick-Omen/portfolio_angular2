import {AuthComponent} from "./auth.component";
import {SignupComponent} from "./signup/signup.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";

export const AuthRoutes = [
    {
        path: 'authorization',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: 'signup'
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'logout',
                component: LogoutComponent
            }
        ]
    }
];