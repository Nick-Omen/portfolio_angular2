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
import {FooterComponent} from './footer/footer.component';
import {PortfolioFilterComponent} from './portfolio-filter/portfolio-filter.component';
import {PortfolioFilterService} from "./portfolio-filter/portfolio-filter.service";
import {PortfolioFilterPipe} from './portfolio-filter/portfolio-filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        PortfolioComponent,
        AboutComponent,
        PortfolioCardComponent,
        PortfolioDetailComponent,
        HomeComponent,
        FooterComponent,
        PortfolioFilterComponent,
        PortfolioFilterPipe,
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
        PortfolioFilterService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
