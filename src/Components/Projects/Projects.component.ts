import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { CardComponent } from '../ChildComponents/Card/Card.component';
@Component({
  selector: 'app-Projects',
  templateUrl: './Projects.component.html',
  styleUrls: ['./Projects.component.css'],
  imports: [MatTabsModule,CardComponent],
  standalone:true
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  frontendDev: { url: string, title: string, description: string } = {
    url: "https://shivamrawat-gpt3.vercel.app/",
    title: "GPT3",
    description:"I've developed a visually stunning and user-friendly single-page website for ChatGPT3. The design emphasizes simplicity and elegance, ensuring an engaging and seamless user experience. It'scrafted to showcase functionality while maintaining aesthetic appeal."
}
  ngOnInit() {
  }

}
