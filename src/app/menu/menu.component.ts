import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
