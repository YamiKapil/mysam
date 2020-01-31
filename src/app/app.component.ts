import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";
import { MenuService } from "./menu.service";
import { Menu, SidebarMenu } from "./menu.module";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    _activatedUrl: String;
    public items: SidebarMenu;
    public home:Menu;
    public alpha: Menu;
    public secondary: Menu;

    constructor(private _route: RouterExtensions, private router: Router, private _menuService: MenuService) {

    }

    ngOnInit(): void{
        this._activatedUrl= "/home";

        this.router.events.pipe(filter((event:any)=> event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);

        this._menuService.sidebar.subscribe(result => {this.items = result;
            if(this.items){
            this.home =<Menu><unknown>result.home;
            this.alpha= <Menu><unknown>result.alpha;
            this.secondary= <Menu><unknown>result.secondary;
        }
        });
    }

    selected(url: String): boolean {
        return this._activatedUrl == url;
    }

    onNavigationTap(_route: String): void {
        this._route.navigate([_route]);
    }
}
