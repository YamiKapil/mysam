    export class Menu {
        constructor(public id: number, public title: string, public slug: string){

        }
    }

    export class SidebarMenu{
        constructor( public home: Menu[], public alpha: Menu[], public secondary: Menu[]){

        }
    }

    export class TabMenu{
        constructor(public home: Menu[], public alpha: Menu[] ){

        }
    }
