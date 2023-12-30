import { Component, OnInit } from '@angular/core';
import { CardViewleaveService } from 'src/app/services/card-viewleave.service';

@Component({
  selector: 'app-card-viewleave',
  templateUrl: './card-viewleave.component.html',
  styleUrls: ['./card-viewleave.component.scss']
})
export class CardViewleaveComponent implements OnInit {

  leavedata:any ={};
  constructor(private empLeaveService:CardViewleaveService){ }

  ngOnInit(): void {
    this.empLeaveService.personalleavedata.subscribe((data) =>{
      console.log('uff',data);
      this.leavedata = data;  
    })
  }
}
