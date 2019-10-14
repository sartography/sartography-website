import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, QueryList, ViewChildren} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LogoValuesComponent} from './logo-values/logo-values.component';
import {TeamComponent} from './team/team.component';
import {CaseStudiesComponent} from './case-studies/case-studies.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

interface MenuLink {
  id: string;
  label: string;
  component: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  menuLinks: MenuLink[] = [
    {id: 'header', label: 'Home', component: HeaderComponent},
    {id: 'welcome', label: 'Intro', component: WelcomeComponent},
    {id: 'about_us', label: 'About Us', component: AboutUsComponent},
    {id: 'logo_values', label: 'Our Values', component: LogoValuesComponent},
    {id: 'team', label: 'Our Team', component: TeamComponent},
    {id: 'case_studies', label: 'Projects', component: CaseStudiesComponent},
    {id: 'contact_us', label: 'Contact', component: ContactUsComponent},
  ];

  @ViewChildren('scrollSpySection') scrollSpySections: QueryList<any>;
  title = 'Sartography';
  currentSection = 'header';
  activeLinkTop: number;
  showIndicator = false;
  isScrolling = false;
  scrollTimer = -1;

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngAfterViewInit() {
  }

  moveSelectedIndicator(linkId: string) {
    this.currentSection = linkId;
    const activeLinkEl = document.getElementById(`${this.currentSection}_menu_link`);
    this.activeLinkTop = activeLinkEl.offsetTop;
  }

  onMenuClick(linkId: string) {
    this.showIndicator = true;
    this.onSectionChange(linkId);
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    this.moveSelectedIndicator(this.currentSection);
  }

  scrollTo(section) {
    document.querySelector('#' + section).scrollIntoView();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolling = true;
    if (this.scrollTimer !== -1) {
      clearTimeout(this.scrollTimer);
    }

    this.scrollTimer = setTimeout(() => {
      this.showIndicator = true;
      this.isScrolling = false;
      this.scrollTimer = -1;
      this.changeDetector.detectChanges();
    }, 2000);
  }

  toggleMenu() {
    this.isScrolling = !this.isScrolling;
  }

}
