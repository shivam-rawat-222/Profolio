import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../Components/SideBar/SideBar.component';
import { NavBarComponent } from '../Components/NavBar/NavBar.component';
import { AboutComponent } from '../Components/About/About.component';
import { ResumeComponent } from '../Components/Resume/Resume.component';
import { ProjectsComponent } from '../Components/Projects/Projects.component';
import { ContactComponent } from '../Components/Contact/Contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent, NavBarComponent,AboutComponent,RouterOutlet,ResumeComponent ,RouterModule,ProjectsComponent ,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
