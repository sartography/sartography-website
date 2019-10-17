import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatMenuModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {AboutUsComponent} from './about-us/about-us.component';
import {ApiService} from './api.service';
import {AppComponent} from './app.component';
import {CaseStudiesComponent} from './case-studies/case-studies.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {TeamComponent} from './team/team.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {easingFn} from './animation';
import {LogoValuesComponent} from './logo-values/logo-values.component';
import {ScrollSpyDirective} from './scroll-spy.directive';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
];

@NgModule({
  declarations: [
    AboutUsComponent,
    AppComponent,
    CaseStudiesComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    LogoValuesComponent,
    ScrollSpyDirective,
    TeamComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    InlineSVGModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    NgxPageScrollModule,
    NgxPageScrollCoreModule.forRoot({easingLogic: easingFn}),
    RouterModule.forRoot(routes),
    MatTooltipModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [
    AboutUsComponent,
    CaseStudiesComponent,
    ContactUsComponent,
    HeaderComponent,
    LogoValuesComponent,
    TeamComponent,
    WelcomeComponent,
  ]
})
export class AppModule {
}
