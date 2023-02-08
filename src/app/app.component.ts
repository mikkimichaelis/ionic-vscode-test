import { Component } from '@angular/core';
import { MenuController, NavController, Platform } from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    constructor(
        public menu: MenuController,
        public platform: Platform,
        public navController: NavController,
    ) {
        this.platform.ready().then(async (readySource) => {
        });
    }
}


