import { Routes } from '@angular/router';
import { AboutComponent } from '../Components/About/About.component';
import { ResumeComponent } from '../Components/Resume/Resume.component';
import { ProjectsComponent } from '../Components/Projects/Projects.component';
import { CertificationComponent } from '../Components/Certification/Certification.component';
import { ContactComponent } from '../Components/Contact/Contact.component';

export const routes: Routes = [
    {
        path: "",
        component:AboutComponent
    },
    {
        path: "resume",
        component:ResumeComponent
    },
    {
        path: "projects",
        component:ProjectsComponent
    },
    {
        path: "certification",
        component:CertificationComponent
    },
    {
        path: "contactme",
        component:ContactComponent
    }

  
];
