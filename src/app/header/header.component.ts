import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [SlideInOutAnimation]
})
export class HeaderComponent implements OnInit {
  animationState = 'out';

  constructor() { }

  ngOnInit() {
    this.animationState = this.animationState === 'out' ? 'in' : 'out';
  }
  
  toggleShowDiv(divName: string) {
    if (divName === 'divA') {
      console.log(this.animationState);
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
      console.log(this.animationState);
    }
  }

}
