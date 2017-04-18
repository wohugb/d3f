import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { NgModule, ApplicationRef } from '@angular/core';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';
import { RouterModule, PreloadAllModules, Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { RestangularModule, Restangular } from 'ngx-restangular';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { NavBarComponent } from './navbar';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { DivisionComponent } from './division';
import { NoContentComponent } from './no-content';
import { XLargeDirective } from './home/x-large';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';

import { AuthGuard } from './_guards';
import { HttpService, AlertService, AuthenticationService,
  UserService, SurveyService } from './_services';
import { ConfService } from './conf/conf.service';
import { fakeBackendProvider } from './_helpers';

import '../styles/styles.scss';
import '../styles/headings.css';
import { ConfComponent } from './conf/conf.component';

// Application wide providers
const APP_PROVIDERS = [...APP_RESOLVER_PROVIDERS, AppState];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider, AuthenticationService) {
  RestangularProvider.setBaseUrl('http://api.d3f.pw/admin');
  // set static header
  RestangularProvider.setDefaultHeaders({
    Authorization: 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'
  });
  // by each request to the server receive a token and update headers with it
  RestangularProvider
    .addFullRequestInterceptor((element, operation, path, url, headers, params) => {
      // let bearerToken = AuthenticationService.getBearerToken();
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      let bearerToken = '';
      if (currentUser && currentUser.token) {
          bearerToken = currentUser.token;
      }
      return {
        headers: Object.assign({}, headers, {Authorization: `Bearer ${bearerToken}`})
      };
    });
  RestangularProvider.addErrorInterceptor((response, subject, responseHandler) => {
    // if (response.status === 403) {
    //   refreshAccesstoken()
    //     .switchMap(refreshAccesstokenResponse => {
    //       response.request.headers.set('Authorization', 'Bearer ' + refreshAccesstokenResponse)
    //       return response.repeatRequest(response.request);
    //     })
    //     .subscribe(
    //       (res) => responseHandler(res),
    //       (err) => subject.error(err)
    //     );
    //   return false;
    // }
    if (response.status === 401) {
      // location.href = '/login';
      let router: Router;
      router.navigate(['/login']);
      return false;
    }
    return true;
  });
}

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    ConfComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules }),
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    HttpService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    SurveyService,
    ConfService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
