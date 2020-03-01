import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowDiv = true;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  isShown: boolean = true ; // hidden by default


  toggleShow() {
  
  this.isShown = ! this.isShown;
  this.toggleDisplayDiv();
  
  }

  constructor() { }

  ngOnInit() {
  }

  firstsec = [
    { 
      name : 'Residential',
      link : 'www.google.com',
      src : 'assets/img/demo/residential.png',
      
    },
    { 
      name : 'Commercial',
      link : 'www.google.com',
      src : 'assets/img/demo/commercial.png',
      
    },
    { 
      name : 'Project (Residential)',
      link : 'www.google.com',
      src : 'assets/img/demo/project.png',
      
    },
    { 
      name : 'Project (Commercial)',
      link : 'www.google.com',
      src : 'assets/img/demo/project1.png',
      
    },
    { 
      name : 'Shared Accommodation',
      link : 'www.google.com',
      src : 'assets/img/demo/sheardAcomm.png',
      
    },
    { 
      name : 'Paying Gest',
      link : 'www.google.com',
      src : 'assets/img/demo/payinggest.png',
      
    }
  ]



  secondsec = [
    { 
      name : 'Agricultural',
      link : 'www.google.com',
      src : 'assets/img/demo/agricultural.png',
      
    },
    { 
      name : 'Industrial',
      link : 'www.facebook.com',
      src : 'assets/img/demo/industrial.png',
      
    }
  ]

  thirdsec = [
    { 
      name : 'Hotel',
      link : 'www.google.com',
      src : 'assets/img/demo/residential.png',
      
    },
    { 
      name : 'Lodge',
      link : 'www.facebook.com',
      src : 'assets/img/demo/commercial.png',
      
    },
    { 
      name : 'Banquet Halls',
      link : 'www.google.com',
      src : 'assets/img/demo/project.png',
      
    },
    { 
      name : 'Destination Vanue',
      link : 'www.facebook.com',
      src : 'assets/img/demo/sheardAcomm.png',
      
    }
  ]
}
