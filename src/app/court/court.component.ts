import { Component, OnInit, Renderer2, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import { Coord } from '../coord';
import { Shot } from '../shot';
import { ShotService } from '../shot.service';
import { GameService } from '../game.service';


@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrls: ['./court.component.less']
})
export class CourtComponent implements OnInit {
  
  shots!: Shot[];
  constructor(private shotService:ShotService, private game:GameService) { 
    this.shotService.getShots().subscribe(x => this.shots = x);
  }
  
 
  
  scale:number = 1;
  courtHeight:number = 50;
  courtWidth:number = 84;
  
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
      let click:Coord = new  Coord(event.offsetX * this.scale, event.offsetY * this.scale);
      

      let shot = undefined;
      if(this.shots.length)
        shot = this.shots[this.shots.length - 1];
      let isNew:boolean = false;
      
      if(shot === undefined || shot.make !== undefined)
      {
        shot = new Shot();
        isNew = true;
      }
      
      if(shot)
      {
       
        shot.x = click.x;
        shot.y = click.y;
        shot.leftSide = this.leftPoessession;
        shot.distance = this.shotService.getShotDistance(shot);
        shot.three = (shot.distance >= 19.75);
        if(isNew)
        {
            shot.gameTime = this.game.clock.time;
            shot.period = this.game.clock.period;
            this.shotService.addShot(shot);
        }
      }
     
    
    }
  }
}
