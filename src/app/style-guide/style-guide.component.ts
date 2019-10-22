import { Component, OnInit } from '@angular/core';

interface ColorVariant {
  suffix: string;
  contrast: string;
}

@Component({
  selector: 'app-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  hues = ['gray', 'primary', 'accent', 'warning'];
  variants = [
    {suffix: '-light-4', contrast: 'black'},
    {suffix: '-light-3', contrast: 'black'},
    {suffix: '-light-2', contrast: 'black'},
    {suffix: '-light-1', contrast: 'black'},
    {suffix: '', contrast: 'white'},
    {suffix: '-dark-1', contrast: 'white'},
    {suffix: '-dark-2', contrast: 'white'},
    {suffix: '-dark-3', contrast: 'white'},
    {suffix: '-dark-4', contrast: 'white'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
