import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isDesktop = true;

  listItems = [
    { 
      "item": "About", 
      "url": "",
      "icon": "home" 
    },
    { 
      "item": "Experience", 
      "url": "experience",
      "icon": "work" 
    },
    { 
      "item": "Projects", 
      "url": "projects",
      "icon": "folder" 
    }
  ];

  constructor() { }

  ngOnInit() {
    this.isDesktop = this.getIsDesktop();
    window.onresize = () => {
      this.isDesktop = this.getIsDesktop();
    };
  }

  getIsDesktop(): boolean {
    const clientWidth = document.documentElement.clientWidth;
    const breakpoint = 600;
    if (clientWidth > breakpoint) {
      return true;
    } else {
      return false;
    }
  }

}
