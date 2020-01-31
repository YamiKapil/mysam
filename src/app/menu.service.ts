import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { Menu, TabMenu, SidebarMenu} from "./menu.module";

@Injectable({
    providedIn: 'root'
})

export class MenuService {

    private _popupMenu = new BehaviorSubject<Menu[]>(null);
        popup = this._popupMenu.asObservable();
    private _tabMenu = new BehaviorSubject<TabMenu>(null);
        tab = this._tabMenu.asObservable();
    private _sidebarMenu = new BehaviorSubject<SidebarMenu>(null);
        sidebar = this._sidebarMenu.asObservable();

    constructor(private http: HttpClient){
        this.getMenu();
    }

    public getMenu() {
        return this.http.get<{Menu, TabMenu, SidebarMenu}>("https://south-asian-monitor.com/public/api/menu")
        .subscribe((result)=> {this._popupMenu.next(result['popup-menu']);
        this._tabMenu.next(result['tab-menu']);
        this._sidebarMenu.next(result['sidebar-menu']);
            // console.log(result);
        },
            (error) => {console.log(error);}
        );
    }
}

