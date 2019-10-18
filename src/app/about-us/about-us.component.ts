import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Capability} from '../interfaces';
import {animations} from '../animation';
import {getScrollState, isEven} from '../util';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: animations
})
export class AboutUsComponent implements OnInit {
  capabilities: Capability[];
  state = 'hide';
  isEven = isEven;

  constructor(private api: ApiService, public el: ElementRef) {
    this.api.getCapabilities().subscribe(c => this.capabilities = c);
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
