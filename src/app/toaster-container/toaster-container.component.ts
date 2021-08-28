import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast-service.service';


@Component({
  selector: 'app-toaster-container',
  templateUrl: './toaster-container.component.html',
  styleUrls: ['./toaster-container.component.less']
})
export class ToasterContainerComponent implements OnInit {

  constructor(public toastService: ToastService) {}
  
  ngOnInit(): void {
    
    
  }


  

}
