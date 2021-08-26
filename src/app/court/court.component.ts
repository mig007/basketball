import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.less']
})
export class CourtComponent implements OnInit {

  event?: MouseEvent;
  constructor() { }
  scale:number = 1;
  ngOnInit(): void {
    this.scale =  84 / 801.74;

  }

  onClick(event?: MouseEvent): void{
    console.log(event);
    this.event = event;
  }
}
