import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { MenuService } from "../menu.service";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view/tab-view";
import { TabMenu, Menu } from "../menu.module";


@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public items: TabMenu;
    public alpha: Menu;
    public home: Menu;


    constructor(public _menuService: MenuService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this._menuService.tab.subscribe(result => {this.items = result;
            if(this.items){
            this.home =<Menu><unknown>result.home;
            this.alpha= <Menu><unknown>result.alpha;
        }
        });
    }



    onDrawerButtonTap(): void{
        const sideDrawer =<RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    // onSelectedIndexchanged(args: SelectedIndexChangedEventData) {
    //     let newIndex= args.newIndex;
    //     console.log(args.newIndex);
    // }
}
