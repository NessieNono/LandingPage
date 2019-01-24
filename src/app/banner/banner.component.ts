import { Component, OnInit } from '@angular/core';
import { transition, trigger, style, animate, query, keyframes, stagger } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'], 
  animations: [
      trigger('fadeIn', [
        transition('*=>*', [
          style({opacity: '0'}), 
          animate('1.4s ease-out', style({opacity: '1'}))
          ])
        ])
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
