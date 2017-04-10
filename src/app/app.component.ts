/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { AppState } from './app.service';
import { Router, NavigationStart } from '@angular/router';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'd3f-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = '第三方服务';
  public url = 'http://www.d3f.pw';
  public isDarkTheme = false;
  public showShadow = false;

  constructor(
    public appState: AppState,
    router: Router
  ) {
    this.showShadow = true;
    // router.events.subscribe( (data: NavigationStart) => {
    //   console.log('router.events', data);
    //   // this.showShadow = data.url.startsWith('/survey');
    //   // console.log('this.showShadow', this.showShadow);
    // });
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
