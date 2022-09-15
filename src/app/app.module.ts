import {HttpClientModule} from '@angular/common/http';
import {Injectable, NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
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
import {StyleGuideComponent} from './style-guide/style-guide.component';
import {HomeComponent} from './home/home.component';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {EmailValidator, EmailValidatorMessage,} from './formly.validator';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TeamMemberComponent} from './team-member/team-member.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { CapabilityDetailsComponent } from './capability-details/capability-details.component';
import { BrandValueComponent } from './brand-value/brand-value.component';

const routes: Routes = [
  {
    path: 'styleguide',
    component: StyleGuideComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@Injectable()
export class FormlyConfig {
  public static config = {
    validators: [
      {name: 'email', validation: EmailValidator},
    ],
    validationMessages: [
      {name: 'email', message: EmailValidatorMessage},
      {name: 'required', message: 'This field is required.'},
    ],
  };
}


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
        StyleGuideComponent,
        HomeComponent,
        TeamMemberComponent,
        CaseStudyComponent,
        CapabilityDetailsComponent,
        BrandValueComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        FormlyMaterialModule,
        FormlyModule.forRoot(FormlyConfig.config),
        HttpClientModule,
        InlineSVGModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        MatTabsModule,
        MatToolbarModule,
        NgxPageScrollModule,
        NgxPageScrollCoreModule.forRoot({ easingLogic: easingFn }),
        RouterModule.forRoot(routes),
        MatTooltipModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
