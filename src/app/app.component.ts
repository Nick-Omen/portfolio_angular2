import {Component, OnInit, HostListener, ElementRef} from '@angular/core';
import {MdlService} from "./services/mdl.service";
import {Router, NavigationEnd} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
})

export class AppComponent implements OnInit {

    isAdminPath: boolean = false;

    constructor(private titleService: Title,
                private elRef: ElementRef,
                private ch: MdlService,
                private router: Router) {
    }

    ngOnInit() {
        setInterval(this.ch.updateDom, 200);
        this.router.events.subscribe(this.routeChanged.bind(this));
    }

    routeChanged(event): void {
        if(event instanceof NavigationEnd) {

            this.isAdminPath = event.urlAfterRedirects.indexOf('/admin') === 0;

            let drawerButton = this.elRef.nativeElement.querySelector('.mdl-layout__drawer-button');

            if(drawerButton){

                let drawer = this.elRef.nativeElement.querySelector('.mdl-layout__drawer');
                drawer.setAttribute('aria-hidden', 'true');
                drawer.classList.remove('is-visible');

                let obfuscator = this.elRef.nativeElement.querySelector('.mdl-layout__obfuscator');
                obfuscator.classList.remove('is-visible');

                drawerButton.setAttribute('aria-expanded', 'false');
            }
        }
    }

    @HostListener('window:scroll', ['$event'])
    windowScroll(event: any) {
        // console.log(event);
    }
}
