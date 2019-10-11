import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

interface MenuLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  activeLink = 'header';
  menuLinks: MenuLink[] = [
    { id: 'header', label: 'Home' },
    { id: 'welcome', label: 'Intro' },
    { id: 'about_us', label: 'About Us' },
    { id: 'logo_values', label: 'Our Values' },
    { id: 'team', label: 'Our Team' },
    { id: 'case_studies', label: 'Projects' },
    { id: 'contact_us', label: 'Contact' }
  ];

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {}
}
