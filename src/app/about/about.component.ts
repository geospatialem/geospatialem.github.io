import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leadSkills = [
    { "strength": "Taking Initiative" },
    { "strength": "Championing Change" },
    { "strength": "Driving for Results" }
  ];

  techSkills = [
    { "name": "Web Accessibility", "level": "100" },
    { "name": "HTML", "level": "100" },
    { "name": "Front-End Development", "level": "85" },
    { "name": "CSS", "level": "85" },
    { "name": "Git", "level": "85" },
    { "name": "ArcGIS suite", "level": "85" },
    { "name": "Microsoft Office suite", "level": "85" },
    { "name": "TypeScript", "level": "75" },
    { "name": "Web Frameworks", "level": "75" },
    { "name": "SQL", "level": "75" },
    { "name": "API Development", "level": "75" },
    { "name": "Adobe suite", "level": "75" },
    { "name": "PostgreSQL", "level": "70" },
    { "name": "Python", "level": "70" }
  ];

  // Leadership skills table columns
  leaderSkillColumns: string[] = ['strength'];

  // Technical skills table columns
  technicalSkillColumns: string[] = ['name', 'level'];

  constructor() { }

  ngOnInit(): void {
  }

}
