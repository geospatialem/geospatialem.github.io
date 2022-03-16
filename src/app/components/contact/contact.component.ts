import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faWordpress } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faTwitter = faTwitter;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faWordpress = faWordpress;

  socialPlatforms = [
    { "name": "Twitter", "icoName": faTwitter, "url": "https://twitter.com/geospatialem" },
    { "name": "LinkedIn", "icoName": faLinkedin, "url": "https://www.linkedin.com/in/khurley" },
    { "name": "GitHub", "icoName": faGithub, "url": "https://github.com/geospatialem" },
    { "name": "Wordpress", "icoName": faWordpress, "url": "https://geospatialresponse.wordpress.com/" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
