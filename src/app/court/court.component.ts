import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { Coord } from '../coord';
import { FieldGoal } from '../field-goal';
import { ShotService } from '../shot.service';


@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.less']
})
export class CourtComponent implements OnInit {
  
  shots!: FieldGoal[];
  constructor(private shotService:ShotService) { 
    this.shotService.getShots().subscribe(x => this.shots = x);
  }
  
 
  
  scale:number = 1;
  courtHeight:number = 50;
  courtWidth:number = 84;
  click:Coord = {x:0, y:0}
  leftBasket:Coord = this.shotService.leftBasket;
  rightBasket:Coord = this.shotService.rightBasket;
  leftPoessession:boolean=true;

  

  ngOnInit() {

 }
  @ViewChild('divCourt') divCourt!: ElementRef;
  ngAfterViewInit(){

    this.updateCourtPosition();

  }
  updateCourtPosition(){
    this.scale =  this.courtHeight / this.divCourt.nativeElement.offsetHeight;
    
    
  }


  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.updateCourtPosition();
  }
  
  onClick(event?: MouseEvent): void{
    
    
    if(event)
    {
      this.click.x = event.offsetX * this.scale;
      this.click.y = event.offsetY * this.scale;

      

      let fga = undefined;
      if(this.shots.length)
        fga = this.shots[this.shots.length - 1];
      let isNew:boolean = false;
      
      if(fga === undefined || fga.make !== undefined)
      {
        fga = new FieldGoal();
        isNew = true;
      }
      
      if(fga)
      {
        fga.x = this.click.x;
        fga.y = this.click.y;
        fga.leftSide = this.leftPoessession;
        fga.distance = this.shotService.getShotDistance(fga);
        fga.three = (fga.distance >= 19.75);
        if(isNew)
        {
            this.shotService.addShot(fga);
        }
      }
     
    
    }
  }
}
