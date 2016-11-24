import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {AppRoutes} from "./app.routes";
import {AdminModule} from "./admin/admin.module";
import {AppService} from "./app.service";
import {HomeComponent} from "./home/home.component";

import {WelcomeComponent} from './welcome/welcome.component';
import {AboutComponent} from './about/about.component';

import {HeaderComponent} from './blocks/header/header.component';
import {NavigationComponent} from './blocks/navigation/navigation.component';
import {SocialComponent} from './blocks/social/social.component';
import {AboutCardComponent} from './blocks/about-card/about-card.component';
import {AboutTableComponent} from './blocks/about-table/about-table.component';
import {SkillsComponent} from './skills/skills.component';
import {SkillComponent} from './components/skill/skill.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        HeaderComponent,
        WelcomeComponent,
        AboutComponent,
        SocialComponent,
        AboutCardComponent,
        AboutTableComponent,
        SkillsComponent,
        SkillComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(AppRoutes),
        AdminModule,
    ],
    providers: [
        AppService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
