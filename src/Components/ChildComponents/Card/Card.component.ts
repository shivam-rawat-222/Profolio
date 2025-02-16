import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Card',
  templateUrl: './Card.component.html',
  styleUrls: ['./Card.component.css'],
  standalone:true
})
export class CardComponent implements OnInit {

  constructor() { }
@Input() dataToBind:any
  ngOnInit() {
    console.log("thisis", this.dataToBind)
  }

}
