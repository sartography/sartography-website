import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Capability} from '../interfaces';
import {animate, state, style, transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn, fadeOut} from '../animation';
import {isEven} from '../util';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition('void <=> *', useAnimation(fadeIn)),
      transition('* <=> void', useAnimation(fadeOut))
    ]),
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          zIndex: 0
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          zIndex: 0
        })
      ),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
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
    const hOffset = window.innerHeight / 2;
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset + hOffset;
    this.state = scrollPosition >= componentPosition ? 'show' : 'hide';
  }
}
