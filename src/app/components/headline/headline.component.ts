import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  isMobile = false;

  tagLines = [
    { "tag": "Accessibility advocate" },
    { "tag": "Designer" },
    { "tag": "Developer" }
  ]

  constructor() { }

  ngOnInit() {
    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };
  }

  getIsMobile(): boolean {
    const clientWidth = document.documentElement.clientWidth;
    const breakpoint = 600;
    if (clientWidth < breakpoint) {
      return true;
    } else {
      return false;
    }
  }

}
