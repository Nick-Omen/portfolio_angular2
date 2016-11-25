import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from "./app.component";
import {AppRoutes} from "./app.routes";
import {AdminModule} from "./admin/admin.module";
import {AppService} from "./app.service";
import {HomeComponent} from "./home/home.component";

import {WelcomeComponent} from './blocks/welcome/welcome.component';
import {AboutComponent} from './blocks/about/about.component';

import {HeaderComponent} from './components/header/header.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {SocialComponent} from './components/social/social.component';
import {AboutCardComponent} from './components/about-card/about-card.component';
import {AboutTableComponent} from './components/about-table/about-table.component';
import {SkillsComponent} from './blocks/skills/skills.component';
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
