import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "saved",
    templateUrl: "./saved.component.html"
})
export class SavedComponent implements OnInit{

    constructor() {

    }

    ngOnInit() {

    }

    onDrawerButtonTap(): void{
        const sideDrawer= <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
