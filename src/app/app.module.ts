import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {NavigationComponent} from './navigation/navigation.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {AboutComponent} from './about/about.component';
import {PortfolioDetailComponent} from './portfolio-detail/portfolio-detail.component';
import {PortfolioCardComponent} from './portfolio-card/portfolio-card.component';
import {HomeComponent} from "./home/home.component";
import {AppService} from "./app.service";
import {PortfolioService} from "./portfolio/portfolio.service";
import {PortfolioThumbComponent} from './portfolio-thumb/portfolio-thumb.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        PortfolioComponent,
        AboutComponent,
        PortfolioThumbComponent,
        PortfolioCardComponent,
        PortfolioDetailComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'about',
                component: AboutComponent,
                data: {}
            },
            {
                path: 'works/:name',
                component: PortfolioDetailComponent,
                data: {}
            },
            {
                path: 'works',
                component: PortfolioComponent,
                data: {}
            },
            {
                path: '',
                component: HomeComponent,
                data: {}
            }
        ])
    ],
    providers: [
        AppService,
        PortfolioService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
