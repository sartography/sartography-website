import {Component, ElementRef, EventEmitter, HostListener, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {ApiService} from '../api.service';
import {animations} from '../animation';
import {getScrollState} from '../util';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  animations: animations
})
export class ContactUsComponent implements OnInit {
  state = 'hide';
  form = new FormGroup({});
  model: any = {};
  errorEmitter = new EventEmitter<string>();
  fields: FormlyFieldConfig[] = [
    {
      key: 'contact_name',
      type: 'input',
      templateOptions: {
        type: 'text',
        placeholder: 'Name',
        required: true,
      },
    },
    {
      key: 'organization',
      type: 'input',
      templateOptions: {
        type: 'text',
        placeholder: 'Organization',
        required: true,
      },
    },
    {
      key: '_replyto',
      type: 'input',
      templateOptions: {
        type: 'email',
        placeholder: 'Email address',
        required: true,
      },
      validators: {'validation': ['email']},
    },
    {
      key: 'message',
      type: 'textarea',
      templateOptions: {
        placeholder: 'Message',
        required: true,
        autosize: true,
        autosizeMinRows: 3,
        autosizeMaxRows: 10,
      },
    },
  ];

  constructor(
    public el: ElementRef,
    private api: ApiService
  ) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.state = getScrollState(this.el);
  }
}
