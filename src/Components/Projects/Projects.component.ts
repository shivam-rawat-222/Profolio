import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ShowProjectsComponent } from "../ChildComponents/ShowProjects/ShowProjects.component";
@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css'],
  imports: [MatTabsModule, ShowProjectsComponent,ShowProjectsComponent],
  standalone:true
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
