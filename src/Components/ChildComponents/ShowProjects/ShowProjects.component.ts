import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../Card/Card.component';

@Component({
  selector: 'app-ShowProjects',
  templateUrl: './ShowProjects.component.html',
  styleUrls: ['./ShowProjects.component.css'],
  imports:[CardComponent],
  standalone:true
})
export class ShowProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
