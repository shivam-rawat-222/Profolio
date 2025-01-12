import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../ChildComponents/Card/Card.component";

@Component({
  selector: 'app-Certification',
  templateUrl: './Certification.component.html',
  styleUrls: ['./Certification.component.css'],
  standalone:true,
  imports: [CardComponent]
})
export class CertificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
